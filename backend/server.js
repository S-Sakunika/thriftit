const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const connectDatabase = require('./config/database')

const userRoute = require('./routes/userApi') 
const authRoute = require('./routes/authApi')
const categoryRoute = require('./routes/categoryApi')
const productRoute = require('./routes/productApi')

require('dotenv').config()
connectDatabase(process.env.DATABASE)

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())

app.listen(port, () => {
    console.log('Server running')
})

app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/category', categoryRoute)
app.use('/api/product', productRoute)
