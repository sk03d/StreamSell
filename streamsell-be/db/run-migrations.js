const fs = require('fs');
const path = require('path');
const pool = require('./connection');

async function runMigrations() {
    const client = await pool.connect();
    try {
        // Start transaction
        await client.query('BEGIN');

        // Read and execute migration file
        const migrationPath = path.join(__dirname, 'migrations', '001_add_user_type.sql');
        const migrationSQL = fs.readFileSync(migrationPath, 'utf8');
        
        console.log('Running migration...');
        await client.query(migrationSQL);
        
        // Commit transaction
        await client.query('COMMIT');
        console.log('Migration completed successfully');
    } catch (error) {
        // Rollback transaction on error
        await client.query('ROLLBACK');
        console.error('Migration failed:', error);
        throw error;
    } finally {
        client.release();
    }
}

// Run migrations
runMigrations()
    .then(() => {
        console.log('All migrations completed');
        process.exit(0);
    })
    .catch((error) => {
        console.error('Migration error:', error);
        process.exit(1);
    }); 