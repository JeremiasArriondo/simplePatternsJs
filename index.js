const express = require('express')
const parser = require('body-parser')
const services = require('./services')
const handlify = require('./handlers')
const app = express()

const usersHandler = handlify('users')

//parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: false}))

// parse application/json
app.use(parser.json())

const port = 3000
app.get('/', usersHandler(services).get)
app.post('/', usersHandler(services).post)
app.put('/:id', usersHandler(services).put)
app.delete('/:id', usersHandler(services).delete)

app.listen(port, () => console.log(`Example app listening on port ${port}`))