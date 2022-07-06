import React from 'react'
import Navbar from './Navbar'
import '../index.css';
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import Recommend from './Recommend';
import Originals from './Originals';


const Home = () => {
  return (
    <div className='home-component'>
        <Navbar/>
        <ImageSlider/>
        <Viewers />
        <Recommend title='Recommended for you'/>
        <Originals title='Originals'/>
        <Recommend title='New to Disney+'/>
    </div>
  )
}

export default Home