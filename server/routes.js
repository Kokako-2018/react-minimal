
const express = require('express')
const router = express.Router()
const db = require('./db')

const bodyParser = require('body-parser')

router.use(bodyParser.json())

router.get('/', function (req, res) {
    db.getDinosaurs()
    .then(dinosaurs =>{
        res.json(dinosaurs)
    })
    console.log('requesting')
  
})


module.exports = router