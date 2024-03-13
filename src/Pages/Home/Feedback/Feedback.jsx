import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
const FeaturedVehicle = () => {
    let cnt=0;
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
    };

    // console.log(cars);
    return (
        <div className='mt-24'>
            <div className='text-center mb-16 '>
                <h1 className='text-2xl font-extralight mb-4'>-OUR CLIENT SAY-</h1>
                <h1 className='text-5xl font-bold'>HAPPY CLIENT FEEDBACK</h1>
            </div>
            <div className="mx-auto w-3/4">
                <Slider {...settings}>
                    {
                        data.map((item) => (
                            <div key={cnt++} className=" bg-base-100 shadow-xl border-2">
                                <div className='lg:flex'>
                                    <div className="m-2 w-2/3 ">
                                        <img src={item.img} alt="Shoes" className="rounded-tr-lg h-64 w-64   " />
                                    </div>
                                    <p className='mx-auto grid items-center'>Here are many variations of passages of Lorem Ipsum available,
                                        butinjected of the humour, or randomised words which don't look even
                                        slightly in the rom believable. If you are going to use a passage of
                                        Lorem Ipsum, you Here are many variations of passages of Lorem Ipsum
                                        available, butinjected of the humour, or randomised word</p>
                                </div>
                                <div className="card-body items-center text-center bg-[#709342] ">
                                    <h2 className="card-title">{item.name}</h2> 
                                    <div className="flex justify-around ">
                                        <CiFacebook style={{ color: 'blue' }} className='size-6 mr-8' />
                                        <CiInstagram style={{ color: 'pink' }} className='size-6 mr-8 ' />
                                        <CiTwitter style={{ color: 'cyan' }} className='size-6' />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};


const data = [
    {
        img: "https://i.postimg.cc/htcj6s4L/jakaria.jpg",
        name: "Jakaria Hossain",
        post: "Founder"
    },
    {
        img: "https://i.postimg.cc/htcj6s4L/jakaria.jpg",
        name: "Jakaria Hossain",
        post: "Co-Founder"
    },
    {
        img: "https://i.postimg.cc/htcj6s4L/jakaria.jpg",
        name: "Jakaria Hossain",
        post: "Director"
    },
    {
        img: "https://i.postimg.cc/htcj6s4L/jakaria.jpg",
        name: "Jakaria Hossain",
        post: "Cashier"
    },
    {
        img: "https://i.postimg.cc/htcj6s4L/jakaria.jpg",
        name: "Jakaria Hossain",
        post: "Salesman"
    },
    {
        img: "https://i.postimg.cc/htcj6s4L/jakaria.jpg",
        name: "Jakaria Hossain",
        post: "Salesman"
    },
    {
        img: "https://i.postimg.cc/htcj6s4L/jakaria.jpg",
        name: "Jakaria Hossain",
        post: "Salesman"
    },
    {
        img: "https://i.postimg.cc/htcj6s4L/jakaria.jpg",
        name: "Jakaria Hossain",
        post: "Salesman"
    },

]
export default FeaturedVehicle;