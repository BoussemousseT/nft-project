import React from 'react'
const myNft = require('../../../backend/nft.json')

const Home = () => {
    const randomCollection = []
    for (let i = 0; i < 3; i++) {
        const index = Math.floor(Math.random() * myNft.length)
        randomCollection.push(myNft[index])
        myNft.pop(index)
    }
    console.log(myNft.length)
    console.log(randomCollection)
    return (
        <main className='homepage'>
            <div className='container'>
                {/* section 1 */}
                <div className='col-xxl-12 px-4'>
                    <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
                        <div id='carouselExampleInterval' className='carousel slide col-10 col-sm-8 col-lg-6' data-bs-ride='carousel'>
                            <div className='carousel-inner'>
                                <div className='carousel-item active' data-bs-interval='10000'>
                                    <img src='public/images/photos/1.jpg' className='imageHomePage d-block mx-lg-auto img-fluid' alt='Bootstrap Themes' width='700' height='500' loading='lazy' />
                                </div>
                                <div className='carousel-item' data-bs-interval='2000'>
                                    <img src='public/images/photos/4.jpg' className='imageHomePage d-block mx-lg-auto img-fluid' alt='Bootstrap Themes' width='700' height='500' loading='lazy' />
                                </div>
                                <div className='carousel-item'>
                                    <img src='public/images/photos/7.jpg' className='imageHomePage d-block mx-lg-auto img-fluid' alt='Bootstrap Themes' width='700' height='500' loading='lazy' />
                                </div>
                            </div>
                            <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleInterval' data-bs-slide='prev'>
                                <span className='carousel-control-prev-icon' aria-hidden='true' />
                                <span className='visually-hidden'>Previous</span>
                            </button>
                            <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleInterval' data-bs-slide='next'>
                                <span className='carousel-control-next-icon' aria-hidden='true' />
                                <span className='visually-hidden'>Next</span>
                            </button>
                        </div>
                        <div className='col-lg-6'>
                            <h1 className='display-5 fw-bold  lh-1 mb-3 text-white'>Discover digital art & Collect NFTs</h1>
                            <p className='lead'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                            <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
                                <button type='button' className='btn btn-primary btn-lg px-4 me-md-2' data-bs-toggle='collapse' href='#collapseExample' role='button' aria-expanded='false' aria-controls='collapseExample'>Show more</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section 2 */}
                <div className='collapse' id='collapseExample'>
                    <div className='row g-4 pb-5'>
                        <h2>Trending Collection</h2>
                        <p>Checkout Our Weekly Updated Trending Collection.</p>
                    </div>
                    <div className='row row-cols-1 row-cols-md-3 g-4'>
                        {randomCollection.map((item, index) => (
                            <div key={index} className='col'>
                                <div className='card h-100'>
                                    <img src={item.collection.image_url} className='card-img-top' alt='...' />
                                    {/* <div className='row'>
                                    {randomCollection.map((item,index) => (

                                        <div key={index} className='col-md-6 col-lg-4 col-xl-4'>
                                            <div className='col'>
                                                <img src={item.collection.image_url} className='card-img-top' alt='...' />
                                            </div>
                                        </div>
                                    ))}
                                </div> */}
                                </div>
                            </div>
                        ))}

                    </div>
                    {/* section 3 */}
                    <div className='row g-4 py-5'>
                        <h2>How It Works</h2>
                        <p>Find Out How To Get Started</p>
                    </div>
                    <div className='row row-cols-1 row-cols-md-3 g-4 pb-5'>
                        <div className='col'>
                            <div className='card h-100 bg-secondary  grad'>
                                <img src='public/images/category/works1.svg' className='card-img-top my-5' alt='works1' width='350' height='350' />
                                <div className='card-body text-white'>
                                    <h3 className='card-title'>Setup Your Wallet</h3>
                                    <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card h-100 bg-secondary  grad'>
                                <img src='public/images/category/works2.svg' className='card-img-top my-5' alt='works2' width='350' height='350' />
                                <div className='card-body text-white'>
                                    <h3 className='card-title'>Create Collection</h3>
                                    <p className='card-text'>This card has supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card h-100 bg-secondary grad'>
                                <img src='public/images/category/works3.svg' className='card-img-top my-5' alt='works3' width='350' height='350' />
                                <div className='card-body text-white'>
                                    <h3 className='card-title'>Start Earning</h3>
                                    <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Home
