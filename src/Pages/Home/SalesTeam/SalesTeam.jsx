import React, { useEffect, useState } from 'react';
import tasfique from '../../../assets/sales-team/tasfique.jpg'
import nahid from '../../../assets/sales-team/nahid.jpg'
import efthe from '../../../assets/sales-team/efthe.jpg'
import saboj from '../../../assets/sales-team/saboj.jpg'
import nazmul from '../../../assets/sales-team/nazmul.jpg'
import jakaria from '../../../assets/sales-team/jakaria.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
const FeaturedVehicle = () => {
    let cnt = 0;
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
                            <div key={cnt++} className='mr-4 '>
                                <div className="card mr-4  bg-base-100   border-2 ">
                                    <figure className="px-10 pt-10">
                                        <img src={item.img} alt="Shoes" className="rounded-full h-36 w-36" />
                                    </figure>
                                    <div className="card-body items-center text-center bg-[#d15fe8] mt-4 h-48">
                                        <h2 className="card-title font-mono">{item.name}</h2>
                                        <p className={item.post=="Founder"? 'text-[red]':'text-[white]'}>{item.post}</p>
                                        <div className="flex justify-around ">
                                            <a href={item.fb} target="_blank"><CiFacebook style={{ color: 'blue' }} className='size-6 mr-8' /></a>
                                            <CiInstagram style={{ color: 'pink' }} className='size-6 mr-8 ' />
                                            <CiTwitter style={{ color: 'cyan' }} className='size-6' />
                                        </div>
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
        img: jakaria,
        name: "Jakaria Hossain Jaki",
        post: "Founder",
        fb: "https://www.facebook.com/innocent.jaki",
    },
    {
        img: nahid,
        name: "Md. Nahid Hasan",
        post: "Co-Founder",
        fb: "https://www.facebook.com/",
    },
    {
        img: saboj,
        name: "Ahsanul Anam Saboj",
        post: "Co-Founder",
        fb: "https://www.facebook.com/ahsanul.anam.92",
    },
    {
        img: efthe,
        name: "Me'razz Hossain Efthe",
        post: "Co-Founder",
        fb: "https://www.facebook.com/mehrazz.efthen.7",
    },
    {
        img: tasfique,
        name: "Tasfique Rishad",
        post: "Co-Founder",
        fb: "https://www.facebook.com/tasfiquerishad86",
    },
    {
        img: nazmul,
        name: "Nazmul Hasan",
        post: "Co-Founder",
        fb: "https://www.facebook.com/nazmulhasanbhuiyan528",
    }

]
export default FeaturedVehicle;