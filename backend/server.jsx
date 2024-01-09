const express = require('express')
const axios = require('axios')
const cors = require('cors')
// const myNft = require('./nft.json')
const lodash = require('lodash')
const bodyParser = require('body-parser')
const sweetalert = require('sweetalert2')

// ROUTES
// const nftRoute = require './routes/nft.js'
// const userRoute = require './routes/user.js'
const { connect, query, disconnect } = require('./dao/dao.js')

// const express = require('express')

const app = express()
const port = 8080
// const apiKey = 'e799484154784962a57c8860843221e6'
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

// Fonction pour mélanger aléatoirement un les donnees de nft.json
function melangerAleatoirement (nftJson) {
    return lodash.shuffle(nftJson)
}
app.get('/collection', async (req, res) => {
    try {
        const response = await axios.get('https://api-mainnet.magiceden.dev/v2/collections', {
            params: {
                offset: '0',
                limit: '500'
            }
        })
        const openSeaData = melangerAleatoirement(response.data)

        const uniqueCollectionData = openSeaData
            .filter(item => item.name !== null)
            .filter(item => item.image !== null)
            .filter(item => item.symbol !== null)
            .filter(item => item.name !== undefined)
            .filter(item => item.image !== undefined)
            .filter(item => item.symbol !== undefined)
            .filter(item => item.length !== 0)

        res.json(uniqueCollectionData)
    } catch (error) {
        console.error('Error fetching NFT data:', error.message)
        res.status(500).json({ error: 'Internal Server Error' }) // Send an error response
    }
})

app.get('/collection/:symbol', async (req, res) => {
    try {
        const { symbol } = req.params
        const response = await axios.get(`https://api-mainnet.magiceden.dev/v2/collections/${symbol}/activities`, {
            params: {
                offset: '0',
                limit: '500'
            }
        })

        const nftData = response.data
        const uniquNftData = nftData
            .filter(item => item.image !== null)
            .filter((item, index, self) => index === self.findIndex(t => t.image === item.image))
            .filter((item, index, self) => index === self.findIndex(t => t.tokenMint === item.tokenMint))
            .filter(item => item.image !== undefined)
            .filter(item => item !== 0)

        res.json(uniquNftData)
    } catch (error) {
        console.error('Error fetching NFT data:', error.message)
        res.status(500).json({ error: 'Internal Server Error' }) // Send an error response
    }
})

app.get('/collection/:symbol/:tokenMint', async (req, res) => {
    try {
        const nftID = req.params.tokenMint // Extract collectionID from URL
        // console.log(nftID)

        const response = await axios.get(`https://api-mainnet.magiceden.dev/v2/tokens/${nftID}/listings`)

        const nftData = response.data
        // const uniquNftData = nftData
        //     .filter(item => item.length !== 0)
        //     .filter((item, index, self) => index === self.findIndex(t => t.image_url === item.image_url))
        // console.log(nftData)

        if (nftData.length === 0) {
            const response2 = await axios.get(`https://api-mainnet.magiceden.dev/v2/tokens/${nftID}`)
            const nftData2 = response2.data
            res.json([nftData2])
        } else {
            res.json(nftData)
        }
    } catch (error) {
        console.error('Error fetching NFT data:', error.message)
        res.status(500).json({ error: 'Internal Server Error' }) // Send an error response
    }
})

app.all('/nowpayments', async (req, res) => {
    const amount = req.query.name
    // console.log('amount', amount)
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

app.post('/signup', async (req, res) => {
    const email = req.body.registeremail
    const name = req.body.registername
    const password = req.body.registerpass
    connect()
    query('INSERT INTO users(name, email, password) VALUES ($1, $2, $3)', [name, email, password], function () {
        disconnect()
    })
    res.redirect('http://localhost:8081/')
})

app.post('/login', async (req, res) => {
    const email = req.body.logemail
    const password = req.body.logpass
    // const body = req.body

    connect()
    query('SELECT email, password FROM users WHERE email = $1 AND password = $2', [email, password], (resp) => {
        if (resp.rows.length > 0) {
            // L'utilisateur existe dans la base de données
            disconnect()
            res.send('http://localhost:8081')
        } else {
            // L'utilisateur n'existe pas dans la base de données
            disconnect()
            // res.send('http://localhost:8081/account/login')
            // res.redirect('http://localhost:8081/account/login')

            sweetalert.fire({
                title: 'Invalid Input',
                text: 'Please fill in all fields correctly.',
                icon: 'error'
            })
        }
    })
    // query('SELECT email , password FROM users  WHERE email=$1 and password=$2', [email], [password], (resp) => {
    //     console.log(resp.rows[0].name)
    //     disconnect()
    // })

    // // console.log('logemail', email)
    // // console.log('body', body)
    // res.redirect('http://localhost:8081')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
