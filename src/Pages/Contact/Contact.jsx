import React from "react";
import Slider from "react-slick";
import car1 from '../../assets/car1.png'
import car2 from '../../assets/car2.png'
import car3 from '../../assets/car3.png'
import car4 from '../../assets/car4.png'
import './Contact.css'
function Contact() {
  var settings = {
    dots: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    pauseOnHover: false
  };
  return (
    <div className="slider-container px-8 ">
      <Slider {...settings}>
        <div className=" p-4">
          <div className="md:flex justify-end items-center items-center">
            <div className="md:w-1/4 ">
              <h1 className='text-2xl text w-full font-extralight '>-INTRODUCING THE</h1>
              <h1 className='w-full  animate-charcter break-words md:text-6xl text-2xl font-normal hyphens-auto tracking-wide'>MERCEDES-AMG</h1>
              <h1 className=' md:text-3xl text-xl sm:break-words w-full font-bold hyphens-auto tracking-wide'>63 S 4MATIC+</h1>
              <p className="font-serif">We all have a dream car some wish for a classy one where as others dream of having..</p>
            </div>
            <img src={car1} alt="" className=" sm:p-1 md:w-3/4 md:m-2 mt-4" />
          </div>
        </div>
        <div className=" p-4">
          <div className="md:flex justify-end items-center items-center">
            <div className="md:w-1/4 mr-">
              <h1 className='text-2xl text w-full font-extralight '>-INTRODUCING THE</h1>
              <h1 className='w-full  animate-charcter break-words md:text-6xl text-2xl font-normal hyphens-auto tracking-wide'>FERRARI-FOX</h1>
              <h1 className=' md:text-3xl text-xl sm:break-words w-full font-bold hyphens-auto tracking-wide'>FC5-2KMT5+</h1>
              <p className="font-serif">We all have a dream car some wish for a classy one where as others dream of having..</p>
            </div>
            <img src={car2} alt="" className=" sm:p-1 md:w-3/4 " />
          </div>
        </div>
        <div className=" p-4">
          <div className="md:flex justify-end items-center items-center">
            <div className="md:w-1/4 mr-">
              <h1 className='text-2xl text w-full font-extralight '>-INTRODUCING THE</h1>
              <h1 className='w-full  animate-charcter break-words md:text-6xl text-2xl font-normal hyphens-auto tracking-wide'>BMW-MOTO</h1>
              <h1 className=' md:text-3xl text-xl sm:break-words w-full font-bold hyphens-auto tracking-wide'>63 S 4MATIC+</h1>
              <p className="font-serif">We all have a dream car some wish for a classy one where as others dream of having..</p>
            </div>
            <img src={car3} alt="" className=" sm:p-1 md:w-3/4 " />
          </div>
        </div>
        <div className=" p-4">
          <div className="md:flex justify-end items-center items-center">
            <div className="md:w-1/4 mr-">
              <h1 className='text-2xl text w-full font-extralight '>-INTRODUCING THE</h1>
              <h1 className='w-full  animate-charcter break-words md:text-6xl text-2xl font-normal hyphens-auto tracking-wide'>TOYOTA-XLR</h1>
              <h1 className=' md:text-3xl text-xl sm:break-words w-full font-bold hyphens-auto tracking-wide'>45 MK-LITE</h1>
              <p className="font-serif">We all have a dream car some wish for a classy one where as others dream of having..</p>
            </div>
            <img src={car2} alt="" className=" sm:p-1 md:w-3/4 " />
          </div>
        </div>


      </Slider>
    </div>
  );
}

export default Contact;
