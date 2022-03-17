const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/', (req, res) => {
    const { user } = req.query
    const filterMessages = user || null
    controller.getMessages(filterMessages)
        .then( (messageList) => {
            response.success(req, res, messageList, 200)
        })
        .catch( (error) => {
            response.error(req, res, 'Unexpected Error', 500, error)
        })
})

router.post('/', (req, res) => {
    const {user, message} = req.body
    controller.addMessage(user, message)
        .then( (fullMessage) => {
            response.success(req, res, fullMessage, 201)
        })
        .catch( () => {
            response.error(req, res, 'Informacion Invalida', 400, 'Simulacro')
        })
})

router.patch('/:id', (req, res) => {
    const { id } = req.params
    const { message } = req.body
    controller.updateMessage(id, message)
        .then( (data) => {
            response.success(req, res, data, 200)
        })
        .catch( (error) => {
            response.error(req, res, 'Error Interno', 500, error)
        })
})

module.exports = router