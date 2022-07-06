import React from 'react'

import imageOne from '../Disney-Plus/images/peaky-blinders.jpg'
import imageTwo from '../Disney-Plus/images/mirzapur.jpg'
import imageThree from '../Disney-Plus/images/Sacred-Games.png'
import imageFour from '../Disney-Plus/images/scam.jpg'
import OriginalsCard from './OriginalsCard'
const Originals = ({title}) => {
    return (
        <>
            <div className='recommended'>
                <h2>{title}</h2>
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