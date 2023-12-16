import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const AllCollections = () => {
    const { symbol } = useParams()

    const [nftData, setNftData] = useState([])
    const [visibleCollections, setVisibleCollections] = useState(16)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/collection/${symbol}`)
                setNftData(response.data)
            } catch (error) {
                console.error('Error fetching NFT data:', error.message)
            }
        }

        fetchData()
    }, [symbol])

    const showMoreCollections = () => {
        setVisibleCollections((prev) => prev + 16)
    }

    return (
        <div className='all-nft-collections'>
            <section className='section-products'>
                <div className='container'>
                    <div className='row justify-content-center text-center'>
                        <div className='col-md-8 col-lg-6'>
                            <div className='header'>
                                <h1 className='page_headline'>{nftData.length > 0 ? nftData[0].collection : 'Empty Collection'}</h1>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        {nftData.slice(0, visibleCollections).map((item, index) => (
                            <div key={index} className='col-md-6 col-lg-4 col-xl-3'>
                                <Link to={`/collection/${symbol}/${item.tokenMint}`} className='collection-link'>
                                    <div id='product' className='single-product'>
                                        <div
                                            className='part-1'
                                            style={{
                                                backgroundImage: ` url(${item.image})`
                                            }}
                                        />
                                        <div className='part-2'>
                                            {/* <h3 className='product-title'>
                        {item.name.length > maxCharacters
                          ? item.name.slice(0, maxCharacters) + '...'
                          : item.name}
                      </h3> */}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    {nftData.length > visibleCollections && (
                        <div className='row justify-content-center'>
                            <button className='btn btn-warning col-md-6 col-lg-6 col-xl-6 btn-lg' onClick={showMoreCollections}>
                                Show More
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default AllCollections
