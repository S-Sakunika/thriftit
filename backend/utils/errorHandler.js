const handleError = (res, e) => {
    let [status, message] = ['', []];
    if (e.code === 11000) { 
        status = 400;
        message.push(`Duplicate key error. ${Object.keys(e.keyValue)[0]} already exists.`)
    } else if (e.name === 'ValidationError') {
        status = 400;
        message.push(Object.values(e.errors).map(err => message.push(err.message)))
    }

    res.status(status).json({
        status: 'failed',
        result: null,
        message: message,
        error: e
    });
}

module.exports = handleError