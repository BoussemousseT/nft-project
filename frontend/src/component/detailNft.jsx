import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const DetailNft = () => {
    const { symbol, tokenMint } = useParams()

    const [nftData, setNftData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/collection/${symbol}/${tokenMint}`)
                setNftData(response.data)
                // console.log('nftData', response.data)
            } catch (error) {
                console.error('Error fetching NFT data:', error.message)
            }
        }

        fetchData()
    }, [symbol, tokenMint])

    return (
        <div className='detail'>

            <section className='py-5'>
                <div className='container'>
                    {
                        nftData.map((item, index) =>
                            <div key={index} className='row'>

                                <aside className='col-lg-4'>
                                    <img style={{ maxWidth: '100%', maxHeight: '512px', margin: 'auto', borderRadius: '15px' }} src={item?.extra?.img || item.image} />
                                </aside>

                                <main className='col-lg-8'>
                                    <div className='details-nft ps-lg-3'>
                                        <h2 className='title text-light page_headline'>
                                            {item?.extra?.name || item.name}
                                        </h2>

                                        <Link to={`/collection/${symbol}`} className='category-name text-info '>{(item?.token?.collection.toUpperCase()) || item.collection.toUpperCase()}</Link>
                                        {/* <p className='description'>
                                    {nftData.description}
                                </p> */}
                                        <ul className='list-details-nft'>
                                            <li><span>List Price : </span>{item?.price || item?.token?.price || 'Unavailable'}</li>
                                            <li><span>Mint Address : </span>{item?.tokenMint || item.mintAddress}</li>
                                            <li><span>Token Address : </span>{item?.tokenAddress || 'Unavailable'}</li>
                                        </ul>
                                        <div className='buttons-details'>
                                            <Link to={`https://magiceden.io/item-details/${tokenMint}`} target='_blank' className='btn btn-warning shadow-0'> Buy now </Link>
                                            <a href='#' className='btn btn-light border icon-hover px-3' style={{ marginLeft: '.5rem' }}>❤️</a>
                                        </div>
                                    </div>
                                </main>

                            </div>
                        )
                    }
                </div>
            </section>

        </div>
    )
}
export default DetailNft
