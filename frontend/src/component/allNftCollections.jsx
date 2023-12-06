import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

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

    const maxCharacters = 18
    return (
        <div>

            {/* Display the NFTs for the selected collection */}
            <section className='section-products'>
                <div className='container'>
                    <div className='row justify-content-center text-center'>
                        <div className='col-md-8 col-lg-6'>
                            <div className='header'>
                                <h1 className='page_headline'>{nftData.length > 0 ? nftData[0].collection : ''} </h1>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        {nftData.map((item) => (
                            <div key={item.id} className='col-md-6 col-lg-4 col-xl-3'>

                                <Link to={`/collection/${collectionID}/${item.identifier}`} className='collection-link'>

                                    <div id='product' className='single-product'>
                                        <div
                                            className='part-1'
                                            style={{
                                                backgroundImage: ` url(${item.image_url})`
                                            }}
                                        />
                                        <div className='part-2'>
                                            <h3 className='product-title'>
                                                {item.name.length > maxCharacters
                                                    ? item.name.slice(0, maxCharacters) + '...'
                                                    : item.name}
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

export default AllCollections
