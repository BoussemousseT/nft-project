const express = require('express')
const axios = require('axios')
const cors = require('cors')
const myNft = require('./nft.json')

// const express = require('express')

const app = express()
const port = 8080
const apiKey = 'e799484154784962a57c8860843221e6'
app.use(cors())

app.get('/collection/:collectionID', async (req, res) => {
    try {
        const { collectionID } = req.params // Extract collectionID from URL
        const response = await axios.get(`https://api.opensea.io/api/v2/chain/ethereum/contract/${collectionID}/nfts`, {
            params: {
                // order_direction: 'asc',
                // offset: '200',
                limit: '200'
            },
            headers: {
                'X-API-KEY': apiKey
            }
        })

        const nftData = response.data.nfts
        const uniquNftData = nftData
            .filter(item => item.image_url !== null)
            .filter((item, index, self) => index === self.findIndex(t => t.image_url === item.image_url))
        res.json(uniquNftData)

        // res.render('<h1>nft</h1>')
    } catch (error) {
        console.error('Error fetching NFT data:', error.message)
        res.status(500).json({ error: 'Internal Server Error' }) // Send an error response
    }
})

app.get('/collection', async (req, res) => {
    try {
        const response = await axios.get('https://api.opensea.io/api/v1/assets', {
            params: {
                // order_direction: 'asc',
                offset: '0',
                limit: '200'
            },
            headers: {
                'X-API-KEY': apiKey
            }
        })
        const openSeaData = response.data.assets

        const collectionData = [...openSeaData, ...myNft]
        // console.log('NFT Data:', nftData)
        const uniqueCollectionData = collectionData
            .filter(item => item.image_url !== null)
            .filter(item => item.collection.image_url !== null)
            .filter((item, index, self) => index === self.findIndex(t => t.image_url === item.image_url))
            .filter((item, index, self) => index === self.findIndex(t => t.collection.name === item.collection.name))

        res.json(uniqueCollectionData)

        // res.render('<h1>nft</h1>')
    } catch (error) {
        console.error('Error fetching NFT data:', error.message)
        res.status(500).json({ error: 'Internal Server Error' }) // Send an error response
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
