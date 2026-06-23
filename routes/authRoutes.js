const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController');

// Get All Users
router.get('/users', authController.getUsers);

// Register User
router.post('/register', authController.registerUser);

// Login User
router.post('/login', authController.loginUser);

module.exports = router;