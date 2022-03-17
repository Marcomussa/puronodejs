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

function updateMessage(id, message){
    return new Promise( async (resolve, reject) => {

        //! Problema con los Parametros
        if(!id || !message){
            reject('Invalid Data')
            return false
        }

        //* Todo ha ido Bien
        const result = await store.updateText(id, message)
        resolve(result)
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage
}