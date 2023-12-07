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
                <div className='col-xxl-12 px-4 py-5'>
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
                            <h1 className='display-5 fw-bold text-body-emphasis lh-1 mb-3'>Responsive left-aligned hero with image</h1>
                            <p className='lead'>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                            <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
                                <button type='button' className='btn btn-primary btn-lg px-4 me-md-2'>Show more</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* section 2 */}
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {randomCollection.map((item) => (
                        <div key={item.id} className='col'>
                            <div className='card h-100'>
                                <img src={item.asset_contract.image_url} className='card-img-top' alt='...' />
                                <div className='row'>
                                    {randomCollection.map((item) => (

                                        <div key={item.id} className='col-md-6 col-lg-4 col-xl-4'>
                                            <div className='col'>
                                                <img src={item.asset_contract.image_url} className='card-img-top' alt='...' />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                {/* section 3 */}
            </div>
        </main>
    )
}
export default Home
