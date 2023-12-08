
'use strict'
import express from 'express'

// ROUTES
import nftRoute from './routes/nft.js'
import userRoute from './routes/user.js'

const app = express()

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse application/json
app.use(express.json())

const PORT = 8080
const CONTENT_TYPE_HTML = 'text/html'
const HTTP_OK = 200

// Only to show node-fs-client
// CORS for development only
// https://enable-cors.org/server_expressjs.html
app.use(function (request, response, next) {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    response.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS')
    response.header('Access-Control-Allow-Credentials', 'false')
    next()
})

app.get('/', function (request, response) {
    response.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_HTML })
    response.end('<h1>Home page</h1>')
})

// ROUTE

app.use('/nfts', nftRoute)
app.use('/users', userRoute)
// methode privee *******************************************************************

app.listen(PORT, function () {
    console.log('Server listening on: http://localhost:%s', PORT)
})
