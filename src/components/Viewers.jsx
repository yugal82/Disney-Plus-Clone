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
import ViewerCard from './ViewerCard'

const Viewers = () => {
    return (
        <>
            <div className="container">
                <ViewerCard imgSrc = {viewerOne} mp4Src = {marvelMp4} />
                <ViewerCard imgSrc = {viewerTwo} mp4Src = {pixarMp4} />
                <ViewerCard imgSrc = {viewerThree} mp4Src = {starWarsMp4} />
                <ViewerCard imgSrc = {viewerFour} mp4Src = {disneyMp4} />
                <ViewerCard imgSrc = {viewerFive} mp4Src = {nationalMp4} />
            </div>
        </>
    )
}

export default Viewers