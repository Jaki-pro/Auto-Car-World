import React from 'react';
import car from '../../assets/featured-vehicle/car12.jpg'
import { IoLogoYoutube } from "react-icons/io5";
import service1 from '../../assets/services/1.jpg'
import { useLocation } from 'react-router-dom';
const Banner = ({children}) => {
    const carTitle = "Affordable Price For Car Shopping"
    const serviceTitle = "Affordable Price For Car Servicing"
    const location = useLocation(); 
    return (
        <div id="slide1" className="carousel-item relative w-full mb-16">
            <img src={children} className="w-full rounded-lg h-2/3" />
            <div className="absolute  transform flex items-center bottom-0 md:pl-12 top-0 bg-gradient-to-r from-[#151515] to-[rgb(21, 21, 21,20)]">
                <div className='pt-2 md:pt-8 w-full   px-8'>
                    {
                        location.pathname=='/repairs'?<h2 className='text-white font-semibold font-serif lg:text-6xl md:text-4xl text-lg'>Awsome Services</h2>:<h2 className='text-white font-semibold font-serif lg:text-6xl md:text-4xl text-lg'>Awsome Cars</h2>
                    }
                    
                    <p className='text-white'>There are many variations of passages of  available, but the majority  </p>
                    <div  className='flex justify-between items-center '>
                        <h2 className='text-white font-bold md:text-3xl w-full font-mono'>Subscribe Youtube</h2>
                        <div><IoLogoYoutube className='text-red-600 md:size-16 size-8' /> </div>
                     </div>
                </div> 
            </div> 
        </div>
    );
};

export default Banner;