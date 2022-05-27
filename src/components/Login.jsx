import React, {useState} from 'react'
import '../index.css';
import logo from '../Disney-Plus/images/logo.svg';
import ctaLogoOne from '../Disney-Plus/images/cta-logo-one.svg';
import ctaLogoTwo from '../Disney-Plus/images/cta-logo-two.png'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
// import { auth, provider } from '../FirebaseConfig';


const LoginNavbar = () => {
    // const handleAuth = () => {
    //     auth.signInWithPopup(provider).then((result) => {
    //         console.log(result);
    //     }).catch((error) => {
    //         alert(error.message);
    //     })
    // }
    
    return (
        <div className='login-navbar'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div>
                {/* <Link to='/home'><button className='btn' onClick={() => {}}>Login</button></Link> */}
                <a className='btn' href="/home">Login</a>
            </div>
        </div>
    )
}

const LoginDetails = () => {
    return (
        <div className="login-section">
            <div >
                <img className="login-image" src={ctaLogoOne} alt="cta-logo-1" />
            </div>
            <div className="login-details">
                <button className='login-btn'>GET ALL THERE</button>
                <p>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</p>
            </div>
            <div >
                <img className="login-image" src={ctaLogoTwo} alt="cta-logo-2" />
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