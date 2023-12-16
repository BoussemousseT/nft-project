import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Collection = () => {
    const [collectionData, setCollectionData] = useState([])
    const [dataLoaded, setDataLoaded] = useState(false)
    const [visibleCollections, setVisibleCollections] = useState(16)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/collection')
                setCollectionData(response.data)
                setDataLoaded(true)
            } catch (error) {
                console.error('Error fetching NFT data:', error.message)
            }
        }

        fetchData()
    }, [])

    const maxCharacters = 18

    const renderSkeleton = () => {
        const skeletonRows = Array.from({ length: 16 }, (_, index) => (
            <div key={index} className='col-md-6 col-lg-4 col-xl-3'>
                <div className='collection-link'>
                    <div id='product' className='single-product skeleton'>
                        {/* Skeleton structure */}
                    </div>
                </div>
            </div>
        ))
        return <div className='row'>{skeletonRows}</div>
    }

    const renderCollection = () => {
        return (
            <div className='row'>
                {collectionData.slice(0, visibleCollections).map((item, index) => (
                    <div key={index} className='col-md-6 col-lg-4 col-xl-3'>
                        <Link to={`/collection/${item.symbol}`} className='collection-link'>
                            <div id='product' className='single-product'>
                                <div
                                    className='part-1'
                                    style={{
                                        backgroundImage: `url(${item.image})`
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
        )
    }

    const handleShowMore = () => {
        setVisibleCollections((prev) => prev + 16)
    }

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
                    {dataLoaded ? renderCollection() : renderSkeleton()}
                    {dataLoaded && visibleCollections < collectionData.length && (
                        <div className='row justify-content-center'>
                            <button className='btn btn-warning col-md-6 col-lg-6 col-xl-6 btn-lg' onClick={handleShowMore}>
                                Show More
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Collection
