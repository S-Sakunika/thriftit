const User = require('../models/User')
const jwt = require('jsonwebtoken')

require('dotenv').config()
const JWT_TOKEN = process.env.JWT_TOKEN

const authenticate = async (req, res, next) => {
    const token = req.header('Authentication')?.replace('Bearer ', '')

    if(!token) {
        return res.status(401).json({ message: 'Authentication required' })
    }

    try {
        const decoded = jwt.verify(token, JWT_TOKEN)
        const user = await User.findById(decoded._id)

        if(!user) {
            return res.status(401).json({ result: null, message: 'User not found' })
        }

        next()
    } catch (e) {
        return res.status(403).json({ message: 'Invalid token' })
    }
}

module.exports = { authenticate }