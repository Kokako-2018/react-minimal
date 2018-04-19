import request from 'superagent'
const urlThing = 'http://localhost:3000/api/v1/'

// startFunctions

export function getDinosaurArray (callback) {
    request.get(urlThing)
    .end((err, res) => {
        callback(err, res.body)
    })
}


