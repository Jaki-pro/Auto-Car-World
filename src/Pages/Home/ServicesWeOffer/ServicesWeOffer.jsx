import React from 'react';
import welcome from '../../../assets/welcome.png'
import { FaCarSide } from "react-icons/fa";
import { GiTakeMyMoney, GiTrade } from "react-icons/gi"; 
import { MdCarRental, MdDepartureBoard  } from "react-icons/md";
import { ImPaintFormat } from "react-icons/im";
import { AiOutlineSafety } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import car from '../../../assets/featured-vehicle/car9.jpg'
const Welcome = () => {
    return (
        <div className='grid lg:grid-cols-2 p-8 mt-24 relative p-8'>
            <div className='mx-auto w-full relative my-auto'>
                <img className='w-4/5 h-96 mx-auto mt-4 border-2 animate-pulse' src={welcome} alt="" /> 
                <img className='w-4/5 h-96 mx-auto mt-4 absolute top-12 border-8 rounded-md' src={car} alt="" /> 
            </div>
            <div className='mt-16'>
                <h1 className='text-2xl font-extralight hyphens-auto tracking-wide mb-4 text-center'>- OUR SERVICES</h1>
                <h1 className='text-5xl font-bold  tracking-wide text-center' >SERVICES WE OFFER</h1>
              
                <div className='grid  grid-cols-2 mx-auto w-full  gap-4 mb-8 mt-8'>
                    <div className=" bg-base-100 shadow-xl p-4 md:flex justify-around  rounded-md">
                        <div className='mr-4 animate-pulse'>
                            <MdCarRental className='size-16 text-indigo-600 mx-auto'></MdCarRental>
                        </div>
                        <div>
                            <h2 className='text-2xl break-words text-center'>Car Inspection</h2>
                            <p className=' text-center '>You can inspect your car perfectly</p>
                        </div>
                    </div> 
                    <div className=" bg-base-100 shadow-xl p-4 md:flex justify-around  rounded-md">
                        <div className='mr-4 animate-pulse'>
                            <ImPaintFormat className='size-16 text-indigo-600 mx-auto'></ImPaintFormat>
                        </div>
                        <div>
                            <h2 className='text-2xl break-words text-center'>Auto Painting</h2>
                            <p className=' text-center '>You can inspect your car perfectly</p>
                        </div>
                    </div> 
                    <div className=" bg-base-100 shadow-xl p-4 md:flex justify-around  rounded-md">
                        <div className='mr-4 animate-pulse'>
                            <GiTakeMyMoney className='size-16 text-indigo-600 mx-auto'></GiTakeMyMoney>
                        </div>
                        <div>
                            <h2 className='text-2xl break-words text-center'>Auto Financing</h2>
                            <p className=' text-center '>You can inspect your car perfectly</p>
                        </div>
                    </div> 
                    <div className=" bg-base-100 shadow-xl p-4 md:flex justify-around  rounded-md">
                        <div className='mr-4 animate-pulse'>
                            <GiTrade className='size-16 text-indigo-600 mx-auto'></GiTrade>
                        </div>
                        <div>
                            <h2 className='text-2xl break-words text-center'>vehicle Trade-in</h2>
                            <p className=' text-center '>You can inspect your car perfectly</p>
                        </div>
                    </div> 
                    <div className=" bg-base-100 shadow-xl p-4 md:flex justify-around rounded-md">
                        <div className='mr-4 animate-pulse'>
                            <MdDepartureBoard  className='size-16 text-indigo-600 mx-auto'></MdDepartureBoard >
                        </div>
                        <div>
                            <h2 className='text-2xl break-words text-center'>Parts Repairing</h2>
                            <p className=' text-center '>You can inspect your car perfectly</p>
                        </div>
                    </div> 
                    <div className=" bg-base-100 shadow-xl p-4 md:flex justify-around rounded-md">
                        <div className='mr-4 animate-pulse'>
                            <CiDeliveryTruck className='size-16 text-indigo-600 mx-auto'></CiDeliveryTruck>
                        </div>
                        <div>
                            <h2 className='text-2xl break-words text-center'>Vehicle Delivery</h2>
                            <p className=' text-center '>You can inspect your car perfectly</p>
                        </div>
                    </div> 
                    
                     
                </div>
            </div>
        </div>
    );
};

export default Welcome;