import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const DetailNft = () => {
    const { collectionID, nftID } = useParams()

    const [nftData, setNftData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/collection/${collectionID}/${nftID}`)
                setNftData(response.data)
                // console.log('nftData', response.data)
            } catch (error) {
                console.error('Error fetching NFT data:', error.message)
            }
        }

        fetchData()
    }, [collectionID, nftID])

    return (
        <div className='detail'>

            <section className='py-5'>
                <div className='container'>
                    <div className='row gx-5'>
                        <aside className='col-lg-6'>
                            <img style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto', borderRadius: '15px' }} src={nftData.image_url} />

                        </aside>
                        <main className='col-lg-6'>
                            <div className='ps-lg-3'>
                                <h2 className='title text-light'>
                                    {nftData.name}
                                </h2>

                                <Link to={`/collection/${collectionID}`} className='text-info'>{nftData?.collection?.name}</Link>
                                <p className='description'>
                                    {nftData.description}
                                </p>

                                <Link to={`https://opensea.io/assets/ethereum/${collectionID}/${nftID}`} target='_blank' className='btn btn-warning shadow-0'> Buy now </Link>
                                <a href='#' className='btn btn-light border icon-hover px-3' style={{ marginLeft: '.5rem' }}>❤️</a>
                            </div>
                        </main>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default DetailNft
