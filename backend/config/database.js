const mongoose = require('mongoose')

const connectDatabase = (url) => {
    mongoose.set('strictQuery', true)

    mongoose.connect(url)
    .then(() => console.log('Database connected'))
    .catch((e) => console.log(e))
}

module.exports = connectDatabase