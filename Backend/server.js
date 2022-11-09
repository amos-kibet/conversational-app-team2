require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const adminRouter = require('./routes/admin')
const userRouter = require('./routes/user')
const authorRouter = require('./routes/author')


const app = express()

//middlewares

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))


//routes
app.use('/api/user', userRouter)
app.use('/api/admin', adminRouter)
app.use('/api/author', authorRouter)


app.listen(process.env.PORT, () => 
console.log(`This app is listening on port, ${process.env.PORT} `))



