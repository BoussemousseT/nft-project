import { connect, query, disconnect } from '../dao/dao.js'
import { CONTENT_TYPE_JSON, HTTP_OK, writeJSONResponse } from './util.js'

export const createNft = async (req, res) => {
    connect()
    query('INSERT INTO nfts (user_id,nft_serial) VALUES ($1, $2)', [req.body.user_id, req.body.nft_serial], function () {
        disconnect()
    })
}

export const getNfts = async (req, res) => {
    connect()
    query('SELECT * FROM nfts ', [], (result) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        res.end(JSON.stringify(result.rows, null, 4))
        disconnect()
    })
}

export const getNft = async (req, res) => {
    connect()
    query('SELECT * FROM nfts WHERE user_id=$1', [req.params.user_id], (resp) => {
        writeJSONResponse(req, res, resp.rows)
        disconnect()
    })
}

export const deleteNft = async (req, res) => {
    connect()
    query('DELETE  FROM nfts WHERE user_id=$1', [req.params.user_id], (result) => {
        res.writeHead(HTTP_OK, { 'Content-Type': CONTENT_TYPE_JSON })
        disconnect()
    })
}
