const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

let app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

consign().include('routes').into(app)

app.listen(3000, '0.0.0.0', () => {
    console.log('Server is running...')
})