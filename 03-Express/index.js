const express = require('express')

const app = express()

// app.get('/health-checkup', (req, res) => {
//    const username = req.headers.username
//    const password = req.headers.password


//    if (username === 'john' && password === 'pass') {
      
//    }
// })

app.use(express.json())

app.post('/health', (req, res) => {
   const kidneys = req.body.kidneys
   const kidneyLength = kidneys.kidneyLength
   res.send("you Have" + kidneyLength + " kidneys")
})


//Global catches - middleware for error
app.use((err, req, res, next) => {
   res.json({
      msg: 'Error with server'
   })
})

app.listen(3000)