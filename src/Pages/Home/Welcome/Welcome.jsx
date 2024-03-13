import React from 'react';
import welcome from '../../../assets/welcome.png'
import { FaCarSide } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi"; 
import { AiOutlineSafety } from "react-icons/ai";
const Welcome = () => {
    return (
        <div className='grid lg:grid-cols-2 p-8 '>
            <div className=''>
                <h1 className='text-2xl font-extralight hyphens-auto tracking-wide mb-4'>- HOW WE ARE</h1>
                <h1 className='text-5xl font-bold  tracking-wide mb-3' >Welcome to Auto shop</h1>
                <p className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                <div className='grid  sm:grid-cols-3 mx-auto lg:w-full w-2/3 gap-4 mb-8'>
                    <div className="card  bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className='border-b-4'>
                                <GiTakeMyMoney className='size-full  hover:skew-y-6' />
                            </div> 
                            <p>WE OFFERS LOWER CARS PRICES</p>
                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className='border-b-4'>
                                <FaCarSide className='size-full hover:skew-y-6' />
                            </div> 
                            <p>LARGEST CARS DEALER SHIP</p>
                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className='border-b-4'>
                                <AiOutlineSafety className='size-full hover:skew-y-6' />
                            </div> 
                            <p>MULTIPOINT SAFETY CHECKS OFFERS</p>
                        </div>
                    </div>
                     
                </div>
            </div>
            <div className='my-auto'>
                <img className='size-4/5 mx-auto mt-4' src={welcome} alt="" />
            </div>
        </div>
    );
};

export default Welcome;