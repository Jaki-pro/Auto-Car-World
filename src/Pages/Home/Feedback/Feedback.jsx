import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import tasfique from '../../../assets/sales-team/tasfique.jpg'
import nahid from '../../../assets/sales-team/nahid.jpg'
import efthe from '../../../assets/sales-team/efthe.jpg'
import saboj from '../../../assets/sales-team/saboj.jpg'
import nazmul from '../../../assets/sales-team/nazmul.jpg'

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
                                    <div className="m-2 ">
                                        <img src={item.img} alt="Shoes" className="rounded-tr-lg md:h-64 sm:48 w-64 mx-auto lg:w-96" />
                                    </div>
                                    <p className='mx-auto p-2 flex items-center text-justify'>Here are many variations of passages of Lorem Ipsum available,
                                        butinjected of the humour, or randomised words which don't look even
                                        slightly in the rom believable. If you are going to use a passage of
                                        Lorem Ipsum, you Here are many variations of passages of Lorem Ipsum
                                        available, butinjected of the humour, or randomised word</p>
                                </div>
                                <div className="card-body items-center text-center bg-[#709342] ">
                                    <h2 className="card-title">{item.name}</h2> 
                                    <div className="flex justify-around ">
                                        <a href={item.fb}  target="_blank"><CiFacebook style={{ color: 'blue' }} className='size-6 mr-8' /></a>
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
        img: efthe,
        name: "Me'razz Hossain Efthe",
        post: "Co-Founder",
        fb: "https://www.facebook.com/mehrazz.efthen.7",
    },
    {
        img: saboj,
        name: "Ahsanul Anam Saboj",
        post: "Co-Founder",
        fb: "https://www.facebook.com/ahsanul.anam.92",
    },
    {
        img: tasfique,
        name: "Tasfique Rishad",
        post: "Co-Founder",
        fb: "https://www.facebook.com/tasfiquerishad86",
    },
    {
        img: nahid,
        name: "Md. Nahid Hasan",
        post: "Co-Founder",
        fb: "https://www.facebook.com/",
    },
    {
        img: nazmul,
        name: "Nazmul Hasan",
        post: "Co-Founder",
        fb: "https://www.facebook.com/nazmulhasanbhuiyan528",
    }
    
]
export default FeaturedVehicle;