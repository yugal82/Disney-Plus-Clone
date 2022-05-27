import React from 'react'
import viewerOne from '../Disney-Plus/images/viewers-marvel.png'
import viewerTwo from '../Disney-Plus/images/viewers-pixar.png'
import viewerThree from '../Disney-Plus/images/viewers-starwars.png'
import viewerFour from '../Disney-Plus/images/viewers-disney.png'
import viewerFive from '../Disney-Plus/images/viewers-national.png'

import disneyMp4 from '../Disney-Plus/videos/disney.mp4'
import marvelMp4 from '../Disney-Plus/videos/marvel.mp4'
import pixarMp4 from '../Disney-Plus/videos/pixar.mp4'
import starWarsMp4 from '../Disney-Plus/videos/star-wars.mp4'
import nationalMp4 from '../Disney-Plus/videos/national-geographic.mp4'
const Viewers = () => {
    return (
        <>
            <div className="container">
                <div className='viewer-card'>
                    <img src={viewerOne} alt="hello" />
                    <video autoPlay={true} loop={true} playsInline={true} >
                        <source src={marvelMp4} type='video/mp4' />
                    </video>
                </div>
                <div className='viewer-card'>
                    <img src={viewerTwo} alt="hello" />
                    <video autoPlay={true} loop={true} playsInline={true} >
                        <source src={pixarMp4} type='video/mp4' />
                    </video>
                </div>
                <div className='viewer-card'>
                    <img src={viewerThree} alt="hello" />
                    <video autoPlay={true} loop={true} playsInline={true} >
                        <source src={starWarsMp4} type='video/mp4' />
                    </video>
                </div>
                <div className='viewer-card'>
                    <img src={viewerFour} alt="hello" />
                    <video autoPlay={true} loop={true} playsInline={true} >
                        <source src={disneyMp4} type='video/mp4' />
                    </video>
                </div>
                <div className='viewer-card'>
                    <img src={viewerFive} alt="hello" />
                    <video autoPlay={true} loop={true} playsInline={true} >
                        <source src={nationalMp4} type='video/mp4' />
                    </video>
                </div>      
            </div>
        </>
    )
}

export default Viewers