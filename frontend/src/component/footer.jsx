import React from 'react'

const Footer = () => {
    return (
        <footer className='nft-footer py-5 text-bg-dark'>
            <div className='container'>

                <div className='row'>
                    <div className='col-6 col-md-3 mb-3'>
                        <h5>Description</h5>
                        <div className='nav flex-column'>
                            <p className='nav-item mb-2'>The first and largest digital marketplace in the world for non-fungible tokens (NFTs).</p>
                            <div className='social-footer  mb-2'>
                                <h5 className='social-footer__title'>
                                    Join our community
                                </h5>
                                <ul className='social-footer__list'>
                                    <li className='social-footer__item'>
                                        <a className='social-footer__link' href='#'>
                                            <img src='../../public/images/social/discord.svg' alt='discord' />
                                        </a>
                                    </li>
                                    <li className='social-footer__item'>
                                        <a className='social-footer__link' href='#'>
                                            <img src='../../public/images/social/youtube.svg' alt='youtube' />
                                        </a>
                                    </li>
                                    <li className='social-footer__item'>
                                        <a className='social-footer__link' href='#'>
                                            <img src='../../public/images/social/twitter.svg' alt='twitter' />
                                        </a>
                                    </li>
                                    <li className='social-footer__item'>
                                        <a className='social-footer__link' href='#'>
                                            <img src='../../public/images/social/instagram.svg' alt='instagram' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-6 col-md-3 mb-3'>
                        <h5>Explore</h5>
                        <ul className='nav flex-column'>
                            <li className='nav-item mb-2'><a href='#' className='nav-link p-0 keychainify-checked'>Collection</a></li>
                            <li className='nav-item mb-2'><a href='#' className='nav-link p-0 keychainify-checked'>About</a></li>
                            <li className='nav-item mb-2'><a href='#' className='nav-link p-0 keychainify-checked'>Contact Us</a></li>
                        </ul>
                    </div>

                    <div className='col-md-5 offset-md-1 mb-3'>
                        <form>
                            <h5>Join our weekly digest</h5>
                            <p>Get exclusive promotions & updates straight to your inbox.</p>
                            <div className='d-flex flex-column flex-sm-row w-100 gap-2'>
                                <label htmlFor='newsletter1' className='visually-hidden'>Email address</label>
                                <input id='newsletter1' type='text' className='form-control' placeholder='Email address' />
                                <button className='btn btn-warning' type='button'>Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <hr />
                <p>© 2023 Company, Inc. All rights reserved.</p>

            </div>

        </footer>
    )
}
export default Footer
