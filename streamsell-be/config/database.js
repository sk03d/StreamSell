const fs = require('fs');
const path = require('path');

// Read the CA certificate from .pem file
const caPem = fs.readFileSync(path.join(__dirname, '..', 'certs', 'ca.pem')).toString();

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    ssl: {
        rejectUnauthorized: true,
        ca: caPem,
        sslmode: process.env.DB_SSL_MODE
    },
    max: process.env.DB_CONNECTION_LIMIT
};

module.exports = dbConfig;
