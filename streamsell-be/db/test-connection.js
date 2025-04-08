const pool = require('./connection');

const testDatabase = async () => {
    const client = await pool.connect();
    try {
        // Test basic connection
        const result = await client.query('SELECT NOW()');
        console.log('Database connection successful at:', result.rows[0].now);

        // Check if users table exists
        const tableCheck = await client.query(`
            SELECT EXISTS (
                SELECT FROM information_schema.tables 
                WHERE table_schema = 'public' 
                AND table_name = 'users'
            );
        `);
        console.log('Users table exists:', tableCheck.rows[0].exists);

        // Try to count users
        const userCount = await client.query('SELECT COUNT(*) FROM users');
        console.log('Number of users in database:', userCount.rows[0].count);

        // List all tables in the database
        const tables = await client.query(`
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = 'public';
        `);
        console.log('Available tables:', tables.rows.map(row => row.table_name));

    } catch (error) {
        console.error('Database test failed:', error);
    } finally {
        client.release();
    }
};

testDatabase()
    .then(() => process.exit(0))
    .catch(error => {
        console.error('Test script failed:', error);
        process.exit(1);
    }); 