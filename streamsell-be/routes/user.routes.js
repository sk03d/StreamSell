const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const pool = require('../db/connection');

const userController = new UserController(pool);

// Public routes
router.post('/signup', userController.signup.bind(userController));
router.post('/login', userController.login.bind(userController));

// Protected routes
router.get('/profile', userController.getProfile.bind(userController));

module.exports = router; 