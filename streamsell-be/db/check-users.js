const pool = require('./connection');

const checkUsers = async () => {
    const client = await pool.connect();
    try {
        const users = await client.query('SELECT id, username, email, created_at FROM users');
        console.log('Current users in database:');
        users.rows.forEach(user => {
            console.log(`ID: ${user.id}, Username: ${user.username}, Email: ${user.email}, Created: ${user.created_at}`);
        });
    } catch (error) {
        console.error('Error checking users:', error);
    } finally {
        client.release();
    }
};

checkUsers()
    .then(() => process.exit(0))
    .catch(error => {
        console.error('Script failed:', error);
        process.exit(1);
    }); 