const { Pool } = require('pg');
const dbConfig = require('../config/database');

const pool = new Pool(dbConfig);

// Test the connection with async/await
async function testConnection() {
    let client;
    try {
        client = await pool.connect();
        const result = await client.query('SELECT NOW()');
        console.log('Database connected successfully at:', result.rows[0].now);
    } catch (err) {
        console.error('Database connection error:', {
            message: err.message,
            code: err.code,
            stack: err.stack,
            detail: err.detail,
            hint: err.hint
        });
        
        // Log additional SSL-related information if available
        if (err.code === 'ECONNREFUSED') {
            console.error('Connection refused. Please check:');
            console.error('1. Database server is running');
            console.error('2. SSL certificate is valid');
            console.error('3. Firewall settings allow the connection');
            console.error('4. Database credentials are correct');
        }
    } finally {
        if (client) {
            client.release();
        }
    }
}

// Run the connection test
testConnection();

// Handle pool errors
pool.on('error', (err) => {
    console.error('Unexpected error on idle client:', {
        message: err.message,
        code: err.code,
        stack: err.stack,
        detail: err.detail
    });
    // Don't exit the process, just log the error
    // process.exit(-1);
});

module.exports = pool;
