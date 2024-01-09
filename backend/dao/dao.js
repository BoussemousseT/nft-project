'use strict'

const pg = require('pg')
const Client = pg.Client

let client = {}

function connect () {
    client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'nftdb',
        user: 'postgres',
        password: 'dima123'
    })

    client.connect((error) => {
        if (error) {
            throw error
        }
    })
}

function query (query, values, resultCallback) {
    client.query(query, values, (error, result) => {
        if (error) {
            throw error
        }
        resultCallback(result)
    })
}

function disconnect () {
    client.end()
}

module.exports = {
    connect,
    query,
    disconnect
}
