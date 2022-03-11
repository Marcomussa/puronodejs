//! Logica de Almacenamiento (MOCK de DB)
const db = require('mongoose')
const Model = require('./model')
const URI = 'mongodb+srv://root:root@cluster0.6ines.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

db.Promise = global.Promise
db.connect( URI, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then( (res) => {
        console.log(`[db] Conectada con Exito`)
    })
    .catch( (error) => {
        console.log(`[db] Error Interno`)
    })

function addMessage (message) {
    const myMessage = new Model(message)
    myMessage.save()
}

async function getMessages () {
   const messages = await Model.find()
   return messages
}

module.exports = {
    add: addMessage,
    list: getMessages
}