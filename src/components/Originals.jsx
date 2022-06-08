import React from 'react'

import imageOne from '../Disney-Plus/images/DTS.jpg'
import imageTwo from '../Disney-Plus/images/Avengers.jpg'
import imageThree from '../Disney-Plus/images/drivetosurvive.png'
import imageFour from '../Disney-Plus/images/Avengers-endgame.jpg'
import OriginalsCard from './OriginalsCard'
const Originals = () => {
    return (
        <>
            <div className='recommended'>
                <h2>Originals</h2>
                <div className='recommend-card'>
                    <OriginalsCard imgSrc={imageOne} />
                    <OriginalsCard imgSrc={imageTwo} />
                    <OriginalsCard imgSrc={imageThree} />
                    <OriginalsCard imgSrc={imageFour} />
                </div>

            </div>
        </>
    )
}

export default Originals