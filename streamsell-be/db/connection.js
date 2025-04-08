const { Pool } = require('pg');
require('dotenv').config();
const dbConfig = require('../config/database');

// Log full database configuration (except password)
console.log('Full database configuration:', {
    ...dbConfig,
    password: '******', // Hide password in logs
    ssl: dbConfig.ssl ? {
        ...dbConfig.ssl,
        ca: dbConfig.ssl.ca ? 'Loaded' : 'Missing'
    } : 'Not configured'
});

let pool;
try {
    pool = new Pool(dbConfig);
    console.log('Pool created successfully');
} catch (error) {
    console.error('Error creating pool:', error);
    process.exit(1);
}

// Test the connection immediately
const testConnection = async () => {
    try {
        const client = await pool.connect();
        try {
            const result = await client.query('SELECT NOW()');
            console.log('Database connection test successful at:', result.rows[0].now);
            
            // Test users table
            const usersTable = await client.query(`
                SELECT EXISTS (
                    SELECT FROM information_schema.tables 
                    WHERE table_schema = 'public' 
                    AND table_name = 'users'
                );
            `);
            console.log('Users table exists:', usersTable.rows[0].exists);
        } finally {
            client.release();
        }
    } catch (err) {
        console.error('Database connection test failed:', err);
        process.exit(1);
    }
};

testConnection();

// Handle pool errors
pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

module.exports = pool;
