var express = require("express");
var cors = require("cors");
var env = require("dotenv");
const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// Load environment variables
env.config();

// Initialize express app
var app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true
}));

// Import routes
const userRoutes = require('./routes/user.routes');

// Use routes
app.use('/api/users', userRoutes);

// Start server
app.listen(2025, () => {
    console.log("Server Started on port 2025");
});

