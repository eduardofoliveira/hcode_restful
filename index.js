const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

let app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(expressValidator())

consign()
    .include('routes')
    .include('utils')
    .into(app)

app.listen(3000, '0.0.0.0', () => {
    console.log('Server is running...')
})