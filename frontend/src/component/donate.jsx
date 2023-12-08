import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'
import sweetalert from 'sweetalert2'

const Donate = () => {
    const [amount, setAmount] = useState('')

    const handleAmountChange = (event) => {
        setAmount(event.target.value)
    }

    // Exemple de trois images aléatoires pour le carrousel
    const carouselImages = [
        'https://www.protocol.com/media-library/an-nft-coin-changing-hands.png?id=29616228&width=1245&height=700&quality=85&coordinates=0%2C0%2C0%2C0',
        'https://nftevening.com/wp-content/uploads/2021/10/NFT-Charity-Donations.jpeg'
        // ,
        // 'https://ips-dc.org/wp-content/uploads/2021/03/billionaire-charity-hands-putting-money-in-a-jar.jpeg'
    ]
    const handleNowPaymentsButtonClick = () => {
        // Redirect to /nowpayments route with the 'name' parameter
        if (amount !== '') {
            window.location.href = `http://localhost:8080/nowpayments?name=${encodeURIComponent(amount)}`
            console.log('amount', amount)
        } else {
            sweetalert.fire({
                title: 'Invalid Input',
                text: 'Please fill in all fields correctly.',
                icon: 'error'
            })
        }
    }

    return (
        <div className='donate container mt-5'>
            <div className='text-center'>
                <h2 className='mb-5 page_headline'>Make a Donation</h2>
            </div>
            <div className='row'>

                <div className='col-md-4'>
                    <h2>Description</h2>
                    <p>
                        Thank you for considering a donation. Your support helps us continue our mission and make a positive impact.
                    </p>
                    <form method='post' action='https://hivepay.io/pay/'>

                        <input type='number' className='form-control mb-3' name='amount' value={amount} onChange={handleAmountChange} placeholder='Donation Amount ($)' min={1} required />
                        <input type='hidden' name='merchant' value='dahay01' />
                        <input type='hidden' name='base_currency' value='USD' />
                        <input type='hidden' name='pay_currency' value='CTP,HIVE,TOP10T' />
                        <input type='hidden' name='item_name' value='Donation' />
                        <input type='hidden' name='notify_url' value='https://website.com/notify/' />
                        <input type='hidden' name='return_url' value='https://website.com/thank_you/' />
                        <input type='hidden' name='cancel_url' value='https://boussemousse.com/' />
                        <input type='hidden' name='third_party' value='jongolson' />
                        <input type='hidden' name='third_party_percent' value='10' />
                        <input type='hidden' name='third_party_memo' value='Commission for donation' />

                        <button type='submit' className='donateButton hivepaybutton mb-3'>
                            <img src='../../../public/images/hivepayDonate.png' />
                        </button>
                        <button type='button' className='donateButton nowpaymentsbutton mb-3' onClick={handleNowPaymentsButtonClick}>
                            <img src='../../../public/images/nowPaymentDonate.png' alt='Now Payments' />
                        </button>
                    </form>
                </div>
                <div className='col-md-8'>
                    <Carousel>
                        {carouselImages.map((image, index) => (
                            <Carousel.Item key={index}>
                                <img className='d-block w-100' src={image} alt={`Slide ${index + 1}`} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <br />
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Donate
