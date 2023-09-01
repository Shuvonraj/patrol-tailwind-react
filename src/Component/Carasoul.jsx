import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carasoul = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='mx-auto text-center'>

      <Slider {...settings}>
        <div className='md:px-3'>
          <img src="\src\Images\slider1.png" alt="" srcset="" className='gap-x-' />

        </div>
        <div className='md:px-3'>
          <img src="\src\Images\slider2.png" alt="" srcset="" className='w-100' />
        </div>
        <div className='md:px-3'>
          <img src="\src\Images\slider3.png" alt="" srcset="" />
        </div>
        <div className='md:px-3'>
          <img src="\src\Images\slider4.png" alt="" srcset="" />
        </div>
      </Slider>

    </div>
  )
}

export default Carasoul