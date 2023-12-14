import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

const Account = () => {
    const [isChecked, setIsChecked] = useState(false)
    // const navigate = useNavigate()

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }

    useEffect(() => {
        const path = window.location.pathname
        setIsChecked(path === '/account/signup')
    }, [])

    return (
        <div className={`login ${isChecked ? 'checkbox-checked' : ''}`}>
            <div className='section '>
                <div className='container '>
                    <div className=' cardGroup row full-height justify-content-center'>
                        <div className=' col-12 text-center align-self-center py-5'>
                            <div className='section pb-5 pt-5 pt-sm-2 text-center'>
                                <h6 className='mb-0 pb-3'><span>LogIn</span><span>Sign-Up</span></h6>
                                <input
                                    className='checkbox'
                                    type='checkbox'
                                    id='reg-log'
                                    name='reg-log'
                                    onChange={handleCheckboxChange}
                                    checked={isChecked}
                                />
                                <label htmlFor='reg-log' />
                                <div className=' card-3d-wrap mx-auto'>
                                    <div className='card-3d-wrapper'>
                                        <div className='card-front'>
                                            <div className='center-wrap'>
                                                <div className='section text-center'>
                                                    <form action='http://localhost:8080/login' method='post'>

                                                        <h4 className='mb-4 pb-3'>Log In</h4>
                                                        <div className='form-group'>
                                                            <input type='email' name='logemail' className='form-style' placeholder='Your Email' id='logemail' autoComplete='off' />
                                                            <i className='input-icon uil uil-at' />
                                                        </div>
                                                        <div className='form-group mt-2'>
                                                            <input type='password' name='logpass' className='form-style' placeholder='Your Password' id='logpass' autoComplete='off' />
                                                            <i className='input-icon uil uil-lock-alt' />
                                                        </div>
                                                        <p className='mb-0 mt-3 text-center'><a href='#0' className='link'>Forgot your password?</a></p>

                                                        {/* <a href='/login' className='btn mt-3'>Log In</a> */}
                                                        <button type='submit' className='btn mt-3'>Log In</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card-back'>
                                            <div className='center-wrap'>
                                                <div className='section text-center'>
                                                    <form action='http://localhost:8080/signup' method='post'>

                                                        <h4 className='mb-4 pb-3'>Sign Up</h4>
                                                        <div className='form-group'>
                                                            <input type='text' name='registername' className='form-style' placeholder='Your Full Name' id='registername' autoComplete='off' />
                                                            <i className='input-icon uil uil-user' />
                                                        </div>
                                                        <div className='form-group mt-2'>
                                                            <input type='email' name='registeremail' className='form-style' placeholder='Your Email' id='registeremail' autoComplete='off' />
                                                            <i className='input-icon uil uil-at' />
                                                        </div>
                                                        <div className='form-group mt-2'>
                                                            <input type='password' name='registerpass' className='form-style' placeholder='Your Password' id='registerpass' autoComplete='off' />
                                                            <i className='input-icon uil uil-lock-alt' />
                                                        </div>
                                                        {/* <a href='http://localhost:8080/register' className='btn mt-4'>Sign Up</a> */}
                                                        <button type='submit' className='btn mt-4'>Sign Up</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
