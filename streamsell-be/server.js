var express=require("express");
var cors=require("cors");
var env=require("dotenv");
const pg = require('pg');
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const fs = require('fs');
const path = require('path');


var app =express();

app.use(express.json());

app.use(require("cors")({ origin: process.env.CLIENT_URL, credentials: true }));

env.config();

// Read the CA certificate from .pem file
const caPem = fs.readFileSync(path.join(__dirname, 'certs', 'ca.pem')).toString();

const config = {
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
    max: process.env.DB_CONNECTION_LIMIT // connection pool limit
};

app.listen(2025,()=>{
    console.log("Server Started");
})

const client = new pg.Client(config);

client.connect(function (err) {
    if (err) throw err;
    client.query("SELECT VERSION()", [], function (err, result) {
        if (err) throw err;
        console.log(result.rows[0].version);
        client.end(function (err) {
            if (err) throw err;
        });
    });
});

