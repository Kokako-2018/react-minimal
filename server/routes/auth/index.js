//Routes folder index.js

const express = require('express')
const router = express.Router()

const db = require('../../db/users')

router.get('/users', function (req, res) {
    console.log('getting the db for the users, my friend')
  db.getUsers()
    .then(user => {
        console.log("I have the data! " + user)
        res.json(user)
    })
})

router.post('/register', register)

function register (req, res) {
  console.log({'da body': req.body})
  db.userExists(req.body.username)
    .then(exists => {
      if (exists) {
        return res.status(400).send({message: 'User Exists'})
      }
      db.createUser(req.body.username,req.body.password)
          .then(success => {
            res.status(201).end()
          })
    })
    .catch(err => {
      res.status(500).send({errorMessage: err.message})
    })
}

module.exports = router
