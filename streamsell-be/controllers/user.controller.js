const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db/connection');

class UserController {
    // Sign up new user
    async signup(req, res) {
        const { username, email, password } = req.body;

        try {
            // Validate input
            if (!username || !email || !password) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            // Check if user already exists
            const userExists = await pool.query(
                'SELECT * FROM users WHERE email = $1 OR username = $2',
                [email, username]
            );

            if (userExists.rows.length > 0) {
                return res.status(400).json({ error: 'User already exists' });
            }

            // Hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Create new user
            const newUser = await pool.query(
                'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email',
                [username, email, hashedPassword]
            );

            // Generate JWT token
            const token = jwt.sign(
                { id: newUser.rows[0].id, username: newUser.rows[0].username },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

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
            console.error('Signup error:', error);
            res.status(500).json({ error: 'Error creating user' });
        }
    }

    // Login user
    async login(req, res) {
        const { email, password } = req.body;

        try {
            // Validate input
            if (!email || !password) {
                return res.status(400).json({ error: 'Email and password are required' });
            }

            // Find user
            const user = await pool.query(
                'SELECT * FROM users WHERE email = $1',
                [email]
            );

            if (user.rows.length === 0) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            // Check password
            const isValidPassword = await bcrypt.compare(password, user.rows[0].password);

            if (!isValidPassword) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            // Generate JWT token
            const token = jwt.sign(
                { id: user.rows[0].id, username: user.rows[0].username },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

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