import React from 'react'
import Navbar from './Navbar'
import '../index.css';
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';


const Home = () => {
  return (
    <div className='home-component'>
        <Navbar/>
        <ImageSlider/>
        <Viewers />
    </div>
  )
}

export default Home