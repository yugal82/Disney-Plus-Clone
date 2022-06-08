import React from 'react'

const RecommendCard = ({ imgSrc }) => {
    return (
        <>
            <div className="recommend-img">
                <img src={imgSrc} alt="hello" />
            </div>
        </>
    )
}

export default RecommendCard