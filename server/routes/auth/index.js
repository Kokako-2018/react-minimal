//Routes folder index.js

const express = require('express')
const router = express.Router()

const db = require('../../db/users')
const token = require('../../auth/token')


router.get('/username', token.decode, (req, res) => {
  console.log({'da body':req.user})
  res.json({
    username: req.user.username
  })
})

router.post('/register', register, token.issue)

function register (req, res,next) {
  console.log({'da body': req.body})
  db.userExists(req.body.username)
    .then(exists => {
      if (exists) {
        console.log('blocked on register function')
        return res.status(400)
        // .send({message: 'User Exists'})
      }
      db.createUser(req.body.username,req.body.password)
          .then(() =>  next())
          .then(created =>{
              console.log(created)
              return res.status(200)
              // .send({message: 'User successfully created'})
          })
    })
    .catch(err => {
      res.status(500).send({errorMessage: err.message})
    })
  }

module.exports = router



// router.get('/users', function (req, res) {
//     console.log('getting the db for the users, my friend')
//   db.getUsers()
//     .then(user => {
//         console.log("I have the data! " + user)
//         res.json(user)
//     })
// })
