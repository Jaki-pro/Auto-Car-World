import React from 'react';
import { RiCarWashingFill } from "react-icons/ri";
import { PiDetectiveBold } from "react-icons/pi";
import { GiAutoRepair } from "react-icons/gi";
import { Link } from 'react-router-dom';
const LookingCar = () => {
    return (
        <div className='mt-16 mb-24 p-24 grid lg:grid-cols-3 md:grid-cols-2 gap-4 mx-auto'>
            <div className='grid grid-cols-1 justify-center items-center gap-4'>
                <div className='p-8 mx-auto'><RiCarWashingFill className='size-16 animate-ping' /></div>
                <h2 className='text-2xl fond-bold text-center'>Looking For a Car?</h2>
                <p className='text-center'>Our cars are delivered fully-registered with all requirements completed. We’ll deliver your car wherever you are.</p>
                <Link to={`new-cars`} className='mx-auto'><button className='btn  btn-warning '>BYE A CAR</button></Link>
            </div>
            <div className='grid grid-cols-1 justify-center items-center gap-4'>
                <div className='p-8 mx-auto'><PiDetectiveBold className='size-16 animate-ping' /></div>
                <h2 className='text-2xl fond-bold text-center'>Want To Sell A Car?</h2>
                <p className='text-center'>Our cars are delivered fully-registered with all requirements completed. We’ll deliver your car wherever you are.</p>
                <Link to='/sell-car' className='mx-auto'><button className='btn  btn-warning'>SELL YOUR CAR</button></Link>
            </div>
            <div className='grid grid-cols-1 justify-center items-center gap-4'>
                <div className='p-8 mx-auto'><GiAutoRepair className='size-16 animate-ping' /></div>
                <h2 className='text-2xl fond-bold text-center'>Book A Car Repair?</h2>
                <p className='text-center'>Our cars are delivered fully-registered with all requirements completed. We’ll deliver your car wherever you are.</p>
                <Link to='/repairs' className='mx-auto'><button className='btn  btn-warning'>BOOK A CAR REPAIR</button></Link>
            </div>
             
            
        </div>
    );
};

export default LookingCar;