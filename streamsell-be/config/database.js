const fs = require('fs');
const path = require('path');

// Read the CA certificate from .pem file
let caPem;
try {
    caPem = fs.readFileSync(path.join(__dirname, '..', 'certs', 'ca.pem')).toString();
} catch (error) {
    console.error('Error reading SSL certificate:', error);
    process.exit(1);
}

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: true,
        ca: caPem,
        sslmode: 'require',
        checkServerIdentity: () => undefined // Skip hostname verification
    },
    max: process.env.DB_CONNECTION_LIMIT,
    connectionTimeoutMillis: 10000, // Increased timeout
    idleTimeoutMillis: 30000,
    // Remove retry_strategy as it's not supported by node-postgres
    keepAlive: true,
    keepAliveInitialDelayMillis: 10000
};

// Log configuration (without sensitive data)
console.log('Database configuration:', {
    host: dbConfig.host,
    port: dbConfig.port,
    database: dbConfig.database,
    ssl: {
        rejectUnauthorized: dbConfig.ssl.rejectUnauthorized,
        sslmode: dbConfig.ssl.sslmode
    }
});

module.exports = dbConfig;
