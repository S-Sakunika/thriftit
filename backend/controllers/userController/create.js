const User = require('../../models/User')
const handleError = require('../../utils/errorHandler')

const create = async (req, res) => {
    try {
        const user = new User(req.body)
        const result = await user.save()

        res.status(200).json({
            status: 'success',
            result: result,
            message: 'User Successfully created'
        })
    } catch (e) {
        handleError(res, e)
    }
}

module.exports = create