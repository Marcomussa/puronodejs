const store = require('./store')

function addMessage (user, message) {

    //! Comprobar que llego un usuario
    return new Promise( (resolve, reject) => {
        if(!user || !message){
            console.error('[messageController] No hay usuario o mensaje')
            reject('Datos incorrectos')
            return false
        }
        const fullMessage = {
            user,
            message,
            date: new Date()
        }
        
        store.add(fullMessage)

        resolve(fullMessage)
    })
}

function getMessages (user, message) {
    return new Promise( (resolve, reject) => {
        resolve(store.list())
    })
}

module.exports = {
    addMessage,
    getMessages
}