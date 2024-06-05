const express = require('express')

const app = express()
const port = 3000

app.set('view engine', 'ejs')

// app.use(logger) // Position is imp, Top to bottom

app.get('/', logger, (req, res, next) => {
   console.log('hi clg')
   // res.send('Hi')
   // res.sendStatus(200)
   // res.status(500).send('Hid')
   // res.status(500).json({ message: 'Error'})
   // res.render('index') // Error for no default engine
   res.render('index', {text: 'textEjs'})
})


// Router

const userRouter = require('./routes/users')

app.use('/users', userRouter)

// Adv middleware


function logger(req, res, next) {
   console.log(req.originalUrl)
   next()
}


app.listen(port)