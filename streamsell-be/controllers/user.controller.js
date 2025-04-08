const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db/connection');

class UserController {
    // Sign up new user
    async signup(req, res) {
        const { username, email, password } = req.body;
        console.log('Signup attempt started for:', { username, email });
        
        // Get a client from the pool
        const client = await pool.connect();
        
        try {
            // Start transaction
            await client.query('BEGIN');
            
            // Validate input
            if (!username || !email || !password) {
                console.log('Missing required fields:', { username: !!username, email: !!email, password: !!password });
                return res.status(400).json({ error: 'All fields are required' });
            }

            // Check if user already exists
            const userExists = await client.query(
                'SELECT * FROM users WHERE email = $1 OR username = $2',
                [email, username]
            );

            if (userExists.rows.length > 0) {
                console.log('User already exists:', { email, username });
                return res.status(400).json({ error: 'User already exists' });
            }

            // Hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Create new user
            console.log('Attempting to create new user:', { email, username });
            const newUser = await client.query(
                'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email',
                [username, email, hashedPassword]
            );
            console.log('User created in database:', newUser.rows[0]);

            // Generate JWT token
            if (!process.env.JWT_SECRET) {
                throw new Error('JWT_SECRET is not configured');
            }

            const token = jwt.sign(
                { id: newUser.rows[0].id, username: newUser.rows[0].username },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            // Commit transaction
            await client.query('COMMIT');

            console.log('Signup successful for:', newUser.rows[0].username);
            res.status(201).json({
                message: 'User created successfully',
                user: {
                    id: newUser.rows[0].id,
                    username: newUser.rows[0].username,
                    email: newUser.rows[0].email
                },
                token
            });
        } catch (error) {
            // Rollback transaction on error
            await client.query('ROLLBACK');
            
            console.error('Signup error:', {
                message: error.message,
                code: error.code,
                detail: error.detail
            });

            if (error.code === '23505') {
                return res.status(400).json({ error: 'Username or email already exists' });
            }

            if (error.message === 'JWT_SECRET is not configured') {
                return res.status(500).json({ error: 'Server configuration error' });
            }

            res.status(500).json({ error: 'Error creating user' });
        } finally {
            // Release the client back to the pool
            client.release();
        }
    }

    // Login user
    async login(req, res) {
        const { email, password } = req.body;
        console.log('Login attempt for email:', email);

        try {
            // Validate input
            if (!email || !password) {
                console.log('Missing email or password');
                return res.status(400).json({ error: 'Email and password are required' });
            }

            // Find user - case insensitive email search
            const user = await pool.query(
                'SELECT * FROM users WHERE LOWER(email) = LOWER($1)',
                [email]
            );

            if (user.rows.length === 0) {
                console.log('User not found for email:', email);
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            console.log('Found user:', { 
                id: user.rows[0].id, 
                username: user.rows[0].username,
                email: user.rows[0].email 
            });

            // Check password
            const isValidPassword = await bcrypt.compare(password, user.rows[0].password);
            console.log('Password validation result:', isValidPassword);

            if (!isValidPassword) {
                console.log('Invalid password for email:', email);
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            // Generate JWT token
            const token = jwt.sign(
                { id: user.rows[0].id, username: user.rows[0].username },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );
            console.log('Login successful for user:', user.rows[0].username);

            res.json({
                message: 'Login successful',
                user: {
                    id: user.rows[0].id,
                    username: user.rows[0].username,
                    email: user.rows[0].email
                },
                token
            });
        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({ error: 'Error logging in' });
        }
    }

    // Get user profile
    async getProfile(req, res) {
        try {
            const user = await pool.query(
                'SELECT id, username, email, created_at FROM users WHERE id = $1',
                [req.user.id]
            );

            if (user.rows.length === 0) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.json(user.rows[0]);
        } catch (error) {
            console.error('Get profile error:', error);
            res.status(500).json({ error: 'Error fetching profile' });
        }
    }
}

module.exports = new UserController(); 