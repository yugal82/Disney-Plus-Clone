import React from 'react'
import Navbar from './Navbar'
import '../index.css';
import ImageSlider from './ImageSlider';


const Home = () => {
  return (
    <div className='home-component'>
        {/* <Navbar/> */}
        <ImageSlider/>
    </div>
  )
}

export default Home