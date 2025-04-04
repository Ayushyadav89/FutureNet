import React, { useEffect, useState } from 'react'
import list from "../assets/list.json";
import Card from './Card.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

import Slider from "react-slick";

function Freebook() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await axios.get("http://localhost:3000/course");

        const data = res.data.filter((data) => data.category === "Free");
        console.log(data);
        setCourses(data);
      } 
      catch (error) {
        console.log(error);
      }
    };
    getCourse();
  }, []);

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
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
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-12'>
      <div>
        <h1 className='text-white font-bold text-3xl pb-4'>Accelerate growth — for you or your organization</h1>
        <p className='text-gray-300 text-xl'>Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.</p>
      </div>

      <div>
      <div className="slider-container mt-5">
      <Slider {...settings}>
        {courses.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </Slider>
    </div>
      </div>
    </div>
  )
}

export default Freebook
