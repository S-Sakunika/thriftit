const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const connectDatabase = require('./config/database')

require('dotenv').config()
connectDatabase(process.env.DATABASE)

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())

app.listen(port, () => {
    console.log('Server running')
})