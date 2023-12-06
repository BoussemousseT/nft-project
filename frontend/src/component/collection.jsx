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

    const maxCharacters = 18

    return (
        <div>
            <section className='section-products'>
                <div className='container'>
                    <div className='row justify-content-center text-center'>
                        <div className='col-md-8 col-lg-6'>
                            <div className='header'>
                                <h1 className='page_headline'>All Collections</h1>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        {collectionData.map((item) => (
                            <div key={item.id} className='col-md-6 col-lg-4 col-xl-3'>
                                <Link to={`/collection/${item.asset_contract.address}`} className='collection-link'>

                                    <div id='product' className='single-product'>
                                        <div
                                            className='part-1'
                                            style={{
                                                backgroundImage: `url(${item.collection.image_url})`
                                            }}
                                        />
                                        <div className='part-2'>
                                            <h3 className='product-title'>
                                                {item.collection.name.length > maxCharacters
                                                    ? item.collection.name.slice(0, maxCharacters) + '...'
                                                    : item.collection.name}
                                            </h3>
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
