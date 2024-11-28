
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../../database/models/userModel'); 

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        console.log('Login Request:', { username, password });

        const user = await User.findOne({ username });
        if (!user) {
            console.log('User not found:', username);
            return res.status(401).json({ message: 'Invalid credentials: User not found' });
        }

        console.log('Stored Password:', user.password);

        const isValid = await user.isPasswordValid(password);
        console.log('Password Valid:', isValid);

        if (!isValid) {
            return res.status(401).json({ message: 'Invalid credentials: Incorrect password' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error', error });
    }
});

module.exports = router;
