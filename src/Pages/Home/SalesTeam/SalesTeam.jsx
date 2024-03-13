import React, { useEffect, useState } from 'react';
import car1 from '../../../assets/featured-vehicle/car1.png'
import car2 from '../../../assets/featured-vehicle/car2.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
const FeaturedVehicle = () => {
    let cnt=0;
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: true,
                    speed: 1000,
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    speed: 1000,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    speed: 1000,
                }
            }
        ]
    };

    // console.log(cars);
    return (
        <div className='mt-24'>
            <div className='text-center mb-16 '>
                <h1 className='text-2xl font-extralight mb-4'>-OUR TEAM-</h1>
                <h1 className='text-5xl font-bold'>MEET OUR SALES TEAM</h1>
            </div>
            <div className="mx-auto w-3/4">
                <Slider {...settings}>
                    {
                        data.map((item) => (
                            <div key={cnt++} className="card  bg-base-100 shadow-xl border-2">
                                <figure className="px-10 pt-10">
                                    <img src={item.img} alt="Shoes" className="rounded-full h-32 w-32" />
                                </figure>
                                <div className="card-body items-center text-center bg-indigo-400 mt-4">
                                    <h2 className="card-title">{item.name}</h2>
                                    <p>{item.post}</p>
                                    <div className="flex justify-around ">
                                        <CiFacebook style={{color:'blue'}}  className='size-6 mr-8' />
                                        <CiInstagram style={{color:'pink'}} className='size-6 mr-8 ' />
                                        <CiTwitter style={{color:'cyan'}} className='size-6' />
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