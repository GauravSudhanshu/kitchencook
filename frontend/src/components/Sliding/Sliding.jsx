
import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import SimpleImageSlider from "react-simple-image-slider";
import "../Sliding/Sliding.css"
import "slick-carousel/slick/slick.css";
import 'react-slideshow-image/dist/styles.css'
import "slick-carousel/slick/slick-theme.css"
import banner1 from "../Sliding/banner/banner1.jpg"
import banner2 from "../Sliding/banner/banner2.jpg"
import banner3 from "../Sliding/banner/banner3.jpg"
import banner4 from "../Sliding/banner/banner4.jpg"
import banner5 from "../Sliding/banner/banner5.jpg"

import { Slide } from 'react-slideshow-image';



const Sliding = () => {
  const images = [
   {url:"banner1" },
   {url:" banner2" },
   {url:" banner3" },
   {url:" banner4" },
   {url:" banner5" },
   
  
  ];
  

  return (
    <div className="slide-container">
        <Slide>
         {images.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div  className =" abc" style={{'backgroundImage':`url(${slideImage.url})`}}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
  )
}

export default Sliding
