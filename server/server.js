const path = require('path')
const express = require('express')
const passport = require('passport')
const authRoutes = require('./routes/auth')


const server = express()

// Middleware
server.use(passport.initialize())
server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use('/api/v1', authRoutes) // connect the api url to the server side routes

module.exports = server
