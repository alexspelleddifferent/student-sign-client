let express = require('express')
let bodyParser = require('body-parser')
let api_routes = require('./routes/api.js')
let path = require('path')

let app = express()

let vueClientDirectory=path.join(__dirname, 'student-sign-in', 'dist')
let vueApp=express.static(vueClientDirectory)
app.use('/', vueApp)

app.use(bodyParser.json())

app.use('/api', api_routes)

app.use(function(req, res, next) {
    res.status(404).send('Not found')
})

app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('server error')
})

let server=app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
})