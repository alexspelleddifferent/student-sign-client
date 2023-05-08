let express = require('express')
let api_routes = require('./routes/api.js')

let app = express()

app.use(express.json())

app.use('/api', api_routes)

app.use(function(req, res, next) {
    res.status(404).send('Not found')
})

app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.tatus(500).send('server error')
})

let server=app.listen(process.env.PORT||3000, function() {
    console.log('Express server running on port', server.address().port)
})