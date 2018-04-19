const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const conn = require('knex')(config)

module.exports = {
    getDinosaurs
}

function getDinosaurs(name){
    console.log('looking')
return conn('dinosaurs').select()
}