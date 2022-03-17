//! Logica de Almacenamiento (MOCK de DB)
const db = require('mongoose')
const Model = require('./model')
const URI = `${process.env.DB_HOST}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.6ines.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

db.Promise = global.Promise
db.connect( URI, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then( () => {
        console.log(`[db] Conectada con Exito`)
    })
    .catch( () => {
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

async function updateText(id, message){
    //? Encuentra
    const foundMessage = await Model.findById(id)
    
    //? Actualiza
    foundMessage.message = message
    
    //? Devuelve
    const newMessage = await foundMessage.save()
    return newMessage
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText
}