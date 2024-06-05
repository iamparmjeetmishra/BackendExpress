const express = require('express')

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))



// Router

const userRouter = require('./routes/oldUsers')

app.use('/users', userRouter)


app.listen(port)