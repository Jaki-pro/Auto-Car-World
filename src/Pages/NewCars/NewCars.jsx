import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleCar from './SingleCar';
import Banner from './Banner';
import carBanner from '../../assets/featured-vehicle/car16.jpg'
const NewCars = () => {
    const data = useLoaderData();
    const [cars, setCars] = useState(data);
    const [popularCars, setPopularCars] = useState(data);
    const filterCars = (event) => {
        event.preventDefault();
        const form = event.target;
        const lo = form.lo.value;
        const hi = form.hi.value;
        const tmp = data.filter(car => car.price >= lo && car.price <= hi);
        setCars(tmp)
        console.log(hi, lo);
    }
    useEffect(() => {
        let newCars = [];
        for (let i = 0; i < 8; i += 3) {
            newCars.push(data[i]);
        }
        setPopularCars(newCars)
    }, [cars])
    return (
        <div>
            <Banner>{carBanner}</Banner>
            <div className='md:flex md:flex-row-reverse  justify-center'>
                <div className='md:w-1/3 p-8 '>
                    <div className='flex justify-center '>
                        <div>
                            <h3 className='text-center font-light text-xl text-[#478f00]'>Filter By Price ($)</h3>
                            <div className="">
                                <form onSubmit={filterCars} className="card-body">
                                    <div className="md:flex md:justify-around items-center ">
                                        <div className='flex justify-around items-center md:mb-0 mb-2'>
                                            <div className='w-24'>
                                                <input type="text" name='lo' placeholder="10000" className="input input-bordered w-full" required />
                                            </div>
                                            <span className='mx-2'>to</span>
                                            <div className='w-24 mr-2'>
                                                <input type="text" name='hi' placeholder="50000" className="input input-bordered w-full" required />
                                            </div>
                                        </div>

                                        <div className="form-control">
                                            <button className="btn  btn-warning">Search</button>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-4 mt-8'>
                        <h2 className='text-xl text-center font-semibold '>POPULAR CARS</h2>
                        {
                            popularCars.map(car => <SingleCar key={car._id} car={car}></SingleCar>)
                        }
                    </div>
                </div>
                <div className=' p-8 md:w-2/3'>
                    <h2 style={{ borderBottom: '3px solid #c0d6fa' }} className='py-4 text-center text-3xl font-semibold mb-8 text-[#6078e7]'>CHOOSE YOUR AFFORDABLE CAR</h2>

                    <div className='grid lg:grid-cols-3 md:grid-cols-2 justify-around gap-4'>

                        {
                            cars.map(car => <SingleCar key={car._id} car={car}></SingleCar>)
                        }
                    </div>
                </div>
            </div>



        </div>
    );
};

export default NewCars;