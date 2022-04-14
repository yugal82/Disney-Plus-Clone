import React from 'react'
import '../index.css';
import logo from '../Disney-Plus/images/logo.svg';
import groupIcon from '../Disney-Plus/images/group-icon.png';
import homeIcon from '../Disney-Plus/images/home-icon.svg'
import searchIcon from '../Disney-Plus/images/search-icon.svg'
import watchlistIcon from '../Disney-Plus/images/watchlist-icon.svg'
import originalsIcon from '../Disney-Plus/images/original-icon.svg'
import moviesIcon from '../Disney-Plus/images/movie-icon.svg'
import seriesIcon from '../Disney-Plus/images/series-icon.svg'

function Navbar() {
    return (
        <navbar className='navbar-section'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar-links">
                <ul>
                    <li>
                        <img className='nav-links-icons' src={homeIcon} alt="" />
                        <a href="">Home</a>
                    </li>
                    <li>
                        <img className='nav-links-icons' src={searchIcon} alt="" />
                        <a href="">Search</a>
                    </li>
                    <li>
                        <img className='nav-links-icons' src={watchlistIcon} alt="" />
                        <a href="">Watchlist</a>
                    </li>
                    <li>
                        <img className='nav-links-icons' src={originalsIcon} alt="" />
                        <a href="">Originals</a>
                    </li>
                    <li>
                        <img className='nav-links-icons' src={moviesIcon} alt="" />
                        <a href="">Movies</a>
                    </li>
                    <li>
                        <img className='nav-links-icons' src={seriesIcon} alt="" />
                        <a href="">Series</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-sign-in">
                <img src={groupIcon} alt="" />
            </div>
        </navbar>
    )
}

export default Navbar