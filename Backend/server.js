require('dotenv').config()

const express = require('express')
const chatsRoutes = require('./routes/chats')

const app = express()

//Register Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use(chatsRoutes)
app.use('/api/chats', chatsRoutes)

//listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port, process.env.PORT')
})