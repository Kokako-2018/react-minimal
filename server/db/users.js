const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

const hash = require('../auth/hash')
//Please note: if you are updating the db file you will need to create a get function to call the tables.

function getUsers(testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function userExists(name, testConn) {
  const conn = testConn || connection
  console.log('blocked hereon db/users.js')
  return conn('users')
    .count('id as n')
    .where('username', name)
    .then(count => {
      return count[0].n > 0
    })
}

function createUser(username, password, testConn) {
  const passwordHash = hash.generate(password)
  const conn = testConn || connection
  return conn('users').insert({username, hash: passwordHash})
}

function getUserByName (username, testConn) {
  const conn = testConn || connection
  return conn('users')
    .select()
    .where('username', username)
    .first()
}

// function getTeman (testConn) {
//   const conn = testConn || connection
//   return conn('Teman').select()  //please check the table name for Teman is the same here as in the database when created.
// }
//
// function getGroup (testConn) {
//   const conn = testConn || connection
//   return conn('Group').select()
// }
module.exports = {getUsers, userExists, createUser,getUserByName}
