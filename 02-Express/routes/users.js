const express = require('express')

const router = express.Router()



router.get('/', (req, res) => {
   res.send('Users List')
})

router.get('/new', (req, res) => {
   // res.send('User new Form')
   res.render('/users/new', {firstName: 'Test'})
})

router.post('/', (req, res) => {
   console.log(req.body.firstName)
   res.send('Hi')
})


// Advanced Routing


router.post('/', (req, res) => {
   res.send('Create user')
})

router
   .route('/:id')
   .get((req, res) => {
      console.log(req.user)
      req.params.id
      res.send(`User Get with id: ${req.params.id}`)
   }).put((req, res) => {
      req.params.id
      res.send(`Update User Get with id: ${req.params.id}`)
   }).delete((req, res) => {
      req.params.id
      res.send(`Delete User Get with id: ${req.params.id}`)
   })


// Middleware

const users = [{name: 'John'}, {name: 'goku'}]
router.param('id', (req, res, next, id) => {
   console.log(id)
   req.user = users[id]
   next() // If next is missing then page will infinite loading
})



module.exports = router