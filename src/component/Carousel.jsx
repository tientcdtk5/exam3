import React, { useState } from 'react'
import "./Carousel.css"
const Carousel = ({images}) => {
    const [imgIndex, setImgIndex] =useState(0);
    const nextImg=()=>{
        setImgIndex((prewIndex)=>( (prewIndex + 1) % images.length));
    }
    const prevImg=()=>{
        setImgIndex((prewIndex)=>  prewIndex === 0 ? images.length - 1 : prewIndex - 1);
    }
    return (
        <div className="slideshow-container">
          <div className='mySlides fade'>
            <img
                src={images[imgIndex]}
                alt={`Image ${imgIndex + 1}`}
            />
          </div>
          
          <a className="prev" onClick={prevImg}>
          ❮
          </a>
          <a className="next" onClick={nextImg}>
          ❯
          </a>

          
        </div>
      );
}

export default Carousel