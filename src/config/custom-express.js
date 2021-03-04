const express = require('express')

const bodyParser = require('body-parser')

const rotas = require('../app/rotas/rotas')

const cors = require('cors')

const app = express()

app.use(cors())

app.use((req, res, next) => {
    res.header('Acess-Control-Allow-Origin', '*');
    next()
});

app.use(bodyParser.urlencoded({extended: true}))

rotas(app)


module.exports = app