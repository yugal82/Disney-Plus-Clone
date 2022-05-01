import styled from "styled-components";
import React from 'react'
import '../index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import sliderOne from '../Disney-Plus/images/slider-scale.jpg'
import sliderTwo from '../Disney-Plus/images/slider-badging.jpg'
import sliderThree from '../Disney-Plus/images/slider-badag.jpg'
import sliderFour from '../Disney-Plus/images/slider-scales.jpg'
import Navbar from "./Navbar";
const SliderContainer = (props) => {
    return(
        <>
            <div className="slider-img">
                <a href="">
                    <img src={props.url} alt="" />
                </a>
            </div>
        </>
    )
}

const ImageSlider = (props) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <div>
            <Navbar/>
            <Carousel {...settings} >
                <SliderContainer url = {sliderOne} />
                <SliderContainer url = {sliderTwo} />
                <SliderContainer url = {sliderThree} />
                <SliderContainer url = {sliderFour} />
            </Carousel>
        </div>
    )
}


const Carousel = styled(Slider)`
    margin-top: 20px;
    position: relative;
    top:72px;
    & > button{
        opacity:0;
        height:100%;
        width:5vw;
        z-index:1;

        &:hover{
            opacity:1;
        }
    }

    ul li button{
        &:before{
            font-size:10px;
            color:rgb(150,157,171);
        }
    }
    li.slick-active button:before{
        color:white;
    }
    .slick-list{
        overflow:initial;
    }
`
export default ImageSlider