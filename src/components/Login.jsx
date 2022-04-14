import React from 'react'
import '../index.css';
import logo from '../Disney-Plus/images/logo.svg';
import ctaLogoOne from '../Disney-Plus/images/cta-logo-one.svg';
import ctaLogoTwo from '../Disney-Plus/images/cta-logo-two.png'
const LoginNavbar = () => {
    return (
        <div className='login-navbar'>
            <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div>
                <button className='btn'>Login</button>
            </div>
        </div>
    )
}

const LoginDetails = () => {
    return (
        <div className="login-section">
            <div >
                <img className="login-image" src={ctaLogoOne} alt="" />
            </div>
            <div className="login-details">
                <button className='login-btn'>GET ALL THERE</button>
                <p>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</p>
            </div>
            <div >
                <img className="login-image" src={ctaLogoTwo} alt="" />
            </div>
        </div>
    )
}
const Login = () => {
    return (
        <div className='login-component'>
            <LoginNavbar />
            <LoginDetails />
        </div>
    )
}

export default Login