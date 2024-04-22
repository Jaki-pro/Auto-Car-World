import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import oldCar from '../../assets/featured-vehicle/old-car.jpg'
import Banner from '../NewCars/Banner';
const OldCars = () => {
    const cars = useLoaderData();

    console.log(cars);
    return (
        <div>
            <Banner>{oldCar}</Banner>
            <h2 className='text-3xl font-bold text-center'>Choose awesome Second hand Cars <br /> and use given Contact to reach</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 justify-around p-8'>
                {
                    cars.map(car => <div key={car._id} className="card bg-base-100 shadow-xl">
                        <figure><img className='sm:h-64 w-full h-48'  src={`https://auto-car-world-server-jaki-pro-jakaria-hossains-projects.vercel.app/${car.img}`} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {car.brand}
                                <div className="badge badge-secondary p-4 sm:p-1 text-xs">{car.times} months used</div>
                            </h2>
                            <p>{car.description}</p>
                            <div className='sm:flex justify-between items-center'>
                                <div className="grid grid-cols-1 gap-2 mr-16 ">
                                    <div className="bg-[#60f0c5] badge badge-outline sm:p-4"><IoCallOutline className='mr-2' />  {car.contactNo}</div>
                                    <div className="bg-[#f7a6e0] badge badge-outline sm:p-4"><MdOutlineMail className='mr-2' /><p className='text-xs'>{car.email}</p></div>
                                </div>
                                <div className="grid grid-cols-1 gap-1 mt-2">
                                    <div className="">Date: {car.date}</div>
                                    <h3 className="break-words text-[green] font-semibold leading-3 sm:leading-5">Price: {car.price}$</h3>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default OldCars;