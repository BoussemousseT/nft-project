import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const AllCollections = () => {
    // Fetch and display all NFTs for the selected collection
    // You can use useParams() from React Router to get the collection id from the URL
    const { collectionID } = useParams()

    const [nftData, setNftData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/collection/${collectionID}`)
                setNftData(response.data)
                // console.log('nftData', response.data)
            } catch (error) {
                console.error('Error fetching NFT data:', error.message)
            }
        }

        fetchData()
    }, [collectionID])

    const maxCharacters = 25
    return (
        <div>

            {/* Display the NFTs for the selected collection */}
            <section className='section-products'>
                <div className='container'>
                    <div className='row justify-content-center text-center'>
                        <div className='col-md-8 col-lg-6'>
                            <div className='header'>
                                <h2>All Collections</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        {nftData.map((item) => (
                            <div key={item.id} className='col-md-6 col-lg-4 col-xl-3'>
                                {/* <Link to={`/collection/${item.asset_contract.address}`} className='collection-link'> */}

                                <div
                                    id='product' className='single-product' style={{
                                        backgroundImage: `url(${item.image_url})`
                                    }}
                                >
                                    <div className='part-1'>
                                        {/* <ul>
                                            <li><a href='#'><i className='fas fa-shopping-cart' /></a></li>
                                            <li><a href='#'><i className='fas fa-heart' /></a></li>
                                            <li><a href='#'><i className='fas fa-plus' /></a></li>
                                            <li><a href='#'><i className='fas fa-expand' /></a></li>
                                        </ul> */}
                                    </div>
                                    <div className='part-2'>
                                        <h3 className='product-title'>
                                            {item.name.length > maxCharacters
                                                ? item.name.slice(0, maxCharacters) + '...'
                                                : item.name}
                                        </h3>
                                        {/* <h4 className='product-old-price'>$79.99</h4>
                                        <h4 className='product-price'>$49.99</h4> */}
                                    </div>
                                </div>
                                {/* </Link> */}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AllCollections
