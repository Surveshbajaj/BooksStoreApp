import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import axios from "axios";

function FreeBooks() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4000/book");
        console.log(res.data);
        setBook(res.data);
      
      } catch (err) {
        console.log(err);
      }
    
    }
    getBook();
  }, []);
  const filterList = book.filter((data) => data.price == "0");
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
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
          <h1 className="font-bold text-lg mt-6 md:mt-0 text-md ">Free offered courses</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
            quas. Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="mb-8 mt-4 m-4">
          <Slider {...settings}>
        
            {filterList.map((item) =>{
               return <Card item={item} key={item._id} />;
            })}
          
           
          </Slider>
        </div>
      </div>
    
    </>
  );
}

export default FreeBooks;
