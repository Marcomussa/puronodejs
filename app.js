require('dotenv').config()
const PORT = process.env.PORT 
const express = require('express')
const app = express()
const router = require('./network/routes')

app.use(express.urlencoded({
    extended: false
}))

app.use(express.json())

app.use('/app', express.static('public'))

router(app)

app.listen(PORT, () => {
    console.log(`Server on Port: ${PORT}`)
})

