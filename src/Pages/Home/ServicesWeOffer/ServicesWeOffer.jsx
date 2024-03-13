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
        <div className='grid lg:grid-cols-2 p-8 mt-24 relative'>
            <div className='mx-auto w-full relative my-auto'>
                <img className='w-4/5 h-96 mx-auto mt-4 border-2 animate-pulse' src={welcome} alt="" /> 
                <img className='w-4/5 h-96 mx-auto mt-4 absolute top-12 border-8 rounded-md' src={car} alt="" /> 
            </div>
            <div className='mt-16'>
                <h1 className='text-2xl font-extralight hyphens-auto tracking-wide mb-4 text-center'>- OUR SERVICES</h1>
                <h1 className='text-5xl font-bold  tracking-wide text-center' >SERVICES WE OFFER</h1>
              
                <div className='grid  grid-cols-2 mx-auto w-full  gap-4 mb-8 mt-8'>
                    <div className=" bg-base-100 shadow-xl p-4 flex justify-around  rounded-md">
                        <div className='mr-4 animate-pulse'>
                            <MdCarRental className='size-16 text-indigo-600'></MdCarRental>
                        </div>
                        <div>
                            <h2 className='text-2xl'>Car Inspection</h2>
                            <p>You can inspect your car perfectly</p>
                        </div>
                    </div> 
                    <div className=" bg-base-100 shadow-xl p-4 flex justify-around  rounded-md">
                        <div className='mr-4 animate-pulse'>
                            <ImPaintFormat className='size-16 text-indigo-600'></ImPaintFormat>
                        </div>
                        <div>
                            <h2 className='text-2xl'>Auto Painting</h2>
                            <p>You can inspect your car perfectly</p>
                        </div>
                    </div> 
                    <div className=" bg-base-100 shadow-xl p-4 flex justify-around  rounded-md">
                        <div className='mr-4 animate-pulse'>
                            <GiTakeMyMoney className='size-16 text-indigo-600'></GiTakeMyMoney>
                        </div>
                        <div>
                            <h2 className='text-2xl'>Auto Financing</h2>
                            <p>You can inspect your car perfectly</p>
                        </div>
                    </div> 
                    <div className=" bg-base-100 shadow-xl p-4 flex justify-around  rounded-md">
                        <div className='mr-4 animate-pulse'>
                            <GiTrade className='size-16 text-indigo-600'></GiTrade>
                        </div>
                        <div>
                            <h2 className='text-2xl'>vehicle Trade-in</h2>
                            <p>You can inspect your car perfectly</p>
                        </div>
                    </div> 
                    <div className=" bg-base-100 shadow-xl p-4 flex justify-around rounded-md">
                        <div className='mr-4 animate-pulse'>
                            <MdDepartureBoard  className='size-16 text-indigo-600'></MdDepartureBoard >
                        </div>
                        <div>
                            <h2 className='text-2xl'>Parts Repairing</h2>
                            <p>You can inspect your car perfectly</p>
                        </div>
                    </div> 
                    <div className=" bg-base-100 shadow-xl p-4 flex justify-around rounded-md">
                        <div className='mr-4 animate-pulse'>
                            <CiDeliveryTruck className='size-16 text-indigo-600'></CiDeliveryTruck>
                        </div>
                        <div>
                            <h2 className='text-2xl'>Vehicle Delivery</h2>
                            <p>You can inspect your car perfectly</p>
                        </div>
                    </div> 
                    
                     
                </div>
            </div>
        </div>
    );
};

export default Welcome;