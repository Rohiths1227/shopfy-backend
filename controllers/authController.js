const { getAllUsers } = require('../models/userModel');
const pool = require('../config/db');

// Get All Users
exports.getUsers = async (req, res) => {
    try {
        const users = await getAllUsers();

        res.json({
            success: true,
            data: users
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Register User
exports.registerUser = async (req, res) => {

    try {

        const { full_name, email, password, mobile } = req.body;

        await pool.query(
            'INSERT INTO users(full_name,email,password,mobile) VALUES($1,$2,$3,$4)',
            [full_name, email, password, mobile]
        );

        res.json({
            success: true,
            message: 'User Registered Successfully'
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Login User
exports.loginUser = async (req, res) => {

    try {

        const { email, password } = req.body;

        const result = await pool.query(
            'SELECT * FROM users WHERE email = $1 AND password = $2',
            [email, password]
        );

        if (result.rows.length > 0) {

            res.json({
                success: true,
                message: 'Login Successful',
                user: result.rows[0]
            });

        } else {

            res.status(401).json({
                success: false,
                message: 'Invalid Email or Password'
            });

        }

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};