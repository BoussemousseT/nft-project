import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Collection = () => {
    const [collectionData, setCollectionData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/collection')
                setCollectionData(response.data)
            } catch (error) {
                console.error('Error fetching NFT data:', error.message)
            }
        }

        fetchData()
    }, [])

    const maxCharacters = 25

    return (
        <div>
            <section className='section-products'>
                <div className='container'>
                    <div className='row justify-content-center text-center'>
                        <div className='col-md-8 col-lg-6'>
                            <div className='header'>
                                <h2>Collections</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        {collectionData.map((item) => (
                            <div key={item.id} className='col-md-6 col-lg-4 col-xl-3'>
                                <Link to={`/collection/${item.asset_contract.address}`} className='collection-link'>

                                    <div
                                        id='product' className='single-product' style={{
                                            backgroundImage: `url(${item.collection.image_url})`
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
                                                {item.collection.name.length > maxCharacters
                                                    ? item.collection.name.slice(0, maxCharacters) + '...'
                                                    : item.collection.name}
                                            </h3>
                                            {/* <h4 className='product-old-price'>$79.99</h4>
                                        <h4 className='product-price'>$49.99</h4> */}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Collection
