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

app.use((req, res, next) => {
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://thriftit.onrender.com"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Private-Network", true);
    //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
    res.setHeader("Access-Control-Max-Age", 7200);
  
    next();
  });
app.use(bodyParser.json())
app.use(express.static('public'))

app.listen(port, () => {
    console.log('Server running')
})

app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/category', categoryRoute)
app.use('/api/product', productRoute)
