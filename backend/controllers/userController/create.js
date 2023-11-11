const User = require('../../models/User')
const bcrypt = require('bcrypt')
const handleError = require('../../utils/errorHandler')

const create = async (req, res) => {
    try {
        const {password} = req.body
        req.body.password = await bcrypt.hash(password, 10)
        const user = new User(req.body)
        const result = await user.save()

        res.status(200).json({
            status: 'success',
            result: result,
            message: 'User successfully created'
        })
    } catch (e) {
        handleError(res, e)
    }
}

module.exports = create