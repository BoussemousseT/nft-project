const express = require('express')
const axios = require('axios')
const cors = require('cors')
const myNft = require('./nft.json')
const lodash = require('lodash')

// const express = require('express')

const app = express()
const port = 8080
const apiKey = 'e799484154784962a57c8860843221e6'
app.use(cors())

// Fonction pour mélanger aléatoirement un les donnees de nft.json
function melangerAleatoirement (nftJson) {
    return lodash.shuffle(nftJson)
}
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
        const myNftAleatoirement = melangerAleatoirement(myNft)

        const collectionData = [...openSeaData, ...myNftAleatoirement]
        // console.log('NFT Data:', nftData)
        const uniqueCollectionData = collectionData
            .filter(item => item.image_url !== null)
            .filter(item => item.name !== null)
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

app.get('/collection/:collectionID/:nftID', async (req, res) => {
    try {
        const { collectionID, nftID } = req.params // Extract collectionID from URL
        const response = await axios.get(`https://api.opensea.io/api/v1/asset/${collectionID}/${nftID}/`, {

            headers: {
                'X-API-KEY': apiKey
            }
        })

        const nftData = response.data
        // const uniquNftData = nftData
        //     .filter(item => item.image_url !== null)
        //     .filter((item, index, self) => index === self.findIndex(t => t.image_url === item.image_url))
        res.json(nftData)

        // res.render('<h1>nft</h1>')
    } catch (error) {
        console.error('Error fetching NFT data:', error.message)
        res.status(500).json({ error: 'Internal Server Error' }) // Send an error response
    }
})

app.all('/nowpayments', async (req, res) => {
    const amount = req.query.name
    console.log('amount', amount)
    try {
        const response = await axios.post(
            'https://api.nowpayments.io/v1/invoice',
            {
                price_amount: amount,
                price_currency: 'usd',
                order_id: 'RGDBP-21314',
                order_description: 'Donation',
                ipn_callback_url: 'https://nowpayments.io',
                success_url: 'https://nowpayments.io',
                cancel_url: 'https://nowpayments.io',
                partially_paid_url: 'https://nowpayments.io',
                is_fixed_rate: true,
                is_fee_paid_by_user: false
            },
            {
                headers: {
                    'x-api-key': '811CNVY-8ZC411P-KEGN5BB-3RKJW3H',
                    'Content-Type': 'application/json'
                }
            }
        )
        res.redirect(response.data.invoice_url)
    } catch (error) {
        console.error('Error processing NowPayments request:', error.message)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
