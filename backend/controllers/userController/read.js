const handleError = require('../../utils/errorHandler')

const getUser = async (req, res) => {
    try {
        res.status(200).json({
            status: 'success',
            result: req.user,
            message: 'User found'
        })
    } catch (e) {
        handleError(res, e)
    }
}

module.exports = getUser