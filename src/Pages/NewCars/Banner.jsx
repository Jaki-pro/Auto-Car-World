import React from 'react';
import car from '../../assets/featured-vehicle/car12.jpg'
import { IoLogoYoutube } from "react-icons/io5";
import service1 from '../../assets/services/1.jpg'
const Banner = ({repair}) => {
    const carTitle = "Affordable Price For Car Shopping"
    const serviceTitle = "Affordable Price For Car Servicing"
    return (
        <div id="slide1" className="carousel-item relative w-full mb-16">
            <img src={repair?service1:car} className="w-full rounded-lg h-2/3" />
            <div className="absolute  transform  bottom-0 top-0 bg-gradient-to-r from-[#151515] to-[rgb(21, 21, 21,20)]">
                <div className='space-y-4 sm: md:pt-48 sm:pt-32  pt-8 md:w-1/2 sm:w-2/3   px-16'>
                    <h2 className='text-white font-bold lg:text-6xl md:text-4xl text-3xl'>{repair?serviceTitle:carTitle}</h2>
                    <p className='text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-white font-bold text-3xl'>Subscribe Youtube</h2>
                        <div><IoLogoYoutube className='text-red-600 size-16' /> </div>
                     </div>
                </div>
            </div> 
        </div>
    );
};

export default Banner;