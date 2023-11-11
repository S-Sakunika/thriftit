const User = require('../../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const handleError = require('../../utils/errorHandler')

require('dotenv').config()
const JWT_TOKEN = process.env.JWT_TOKEN

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({email})

        if(!user) {
            return res.status(400).json({
                status: 'failed',
                result: null,
                message: 'Email or password incorrect'
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password)

        if(!isPasswordMatch) {
            return res.status(400).json({
                status: 'failed',
                result: null,
                message: 'Email or password incorrect'
            })
        }

        const token = jwt.sign({_id: user._id}, JWT_TOKEN, {expiresIn: '1h'})

        res.status(200).json({
            status: 'success',
            token: token,
            message: 'Logged in successfully'
        })
    } catch (e) {
        handleError(res, e)
    }
}

module.exports = login