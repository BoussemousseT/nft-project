import React from 'react'

const About = () => {
    return (
        <div className='about'>
            <div className='px-4 py-5 my-5 text-center'>
                <h1 className='display-5 fw-bold text-white'>Welcome to B</h1>
                <div className='col-lg-6 mx-auto'>
                    <p className='lead mb-4'>Your destination for discovery, expression, and ownership across digital cultures.</p>
                    <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
                        <button type='button' className='btn btn-primary btn-lg px-4 gap-3'>Explore NFT</button>
                        {/* <button type='button' className='btn btn-outline-secondary btn-lg px-4'>Secondary</button> */}
                    </div>
                </div>
            </div>
            <div className='container col-xxl-12 px-4 py-5'>
                <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
                    <div className='col-10 col-sm-8 col-lg-7'>
                        <div className='card-group'>
                            <div className='card'>
                                <img src='public/images/photos/about1.png' className='card-img-top' alt='...' />
                                <div className='card-body'>
                                    <h5 className='card-title'>Pascal</h5>
                                    <p className='card-text'>Chief Technology Officer</p>
                                </div>
                            </div>
                            <div className='card'>
                                <img src='public/images/photos/about2.png' className='card-img-top' alt='...' />
                                <div className='card-body'>
                                    <h5 className='card-title'>Jean</h5>
                                    <p className='card-text'>Team Leader</p>
                                </div>
                            </div>
                            <div className='card'>
                                <img src='public/images/photos/about3.png' className='card-img-top' alt='...' />
                                <div className='card-body'>
                                    <h5 className='card-title'>Taoufik</h5>
                                    <p className='card-text'>Technology Leader</p>
                                </div>
                            </div>
                            <div className='card'>
                                <img src='public/images/photos/about4.png' className='card-img-top' alt='...' />
                                <div className='card-body'>
                                    <h5 className='card-title'>CongTai</h5>
                                    <p className='card-text'>Technology Leader</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5'>
                        <h1 className='display-5 fw-bold text-body-emphasis lh-1 mb-3'>B's Story</h1>
                        <p className='lead'>After four friends discovered NFTs and its tremendous potential, Magic Eden was born. With backgrounds across crypto, DeFi, consumer internet companies and management consulting, they identified gaps in existing NFT marketplaces and created something new.</p>
                    </div>
                </div>
            </div>
            <div className='container col-xxl-8 px-4 py-5'>
                <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
                    <div className='col-10 col-sm-8 col-lg-6'>
                        <p>Jack came up with the name Magic Eden which represents a sense of limitless possibility. NFTs are the future of art and culture. And, we consider ourselves stewards of the NFT space. We’ve built the most liquid secondary marketplace and we are the first marketplace to implement bidding, rarity index, and a dedicated minting platform that automatically connects to our secondary marketplace. We’re just getting started.</p>
                    </div>
                    <div className='col-lg-6'>
                        <h1 className='display-5 fw-bold text-body-emphasis lh-1 mb-3'>Responsive left-aligned hero with image</h1>
                        <p className='lead'>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
                            <button type='button' className='btn btn-primary btn-lg px-4 me-md-2'>Primary</button>
                            <button type='button' className='btn btn-outline-secondary btn-lg px-4'>Default</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default About
