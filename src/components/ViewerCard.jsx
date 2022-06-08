import React from 'react'

const ViewerCard = ({imgSrc,mp4Src}) => {
    return (
        <>
            <div className='viewer-card'>
                <img src={imgSrc} alt="hello" />
                <video autoPlay={true} loop={true} playsInline={true} >
                    <source src={mp4Src} type='video/mp4' />
                </video>
            </div>
        </>
    )
}

export default ViewerCard