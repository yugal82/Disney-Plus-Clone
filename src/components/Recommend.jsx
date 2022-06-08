import React from 'react'
import RecommendCard from './RecommendCard'
import imageOne from '../Disney-Plus/images/DTS.jpg'
import imageTwo from '../Disney-Plus/images/Avengers.jpg'
import imageThree from '../Disney-Plus/images/drivetosurvive.png'
import imageFour from '../Disney-Plus/images/Avengers-endgame.jpg'
const Recommend = () => {
    return (
        <>
            <div className='recommended'>
                <h2>Recommended for you</h2>
                <div className='recommend-card'>
                    <RecommendCard imgSrc={imageOne} />
                    <RecommendCard imgSrc={imageTwo} />
                    <RecommendCard imgSrc={imageThree} />
                    <RecommendCard imgSrc={imageFour} />
                </div>

            </div>
        </>
    )
}

export default Recommend