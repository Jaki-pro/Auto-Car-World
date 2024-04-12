import React, { useEffect, useState } from 'react';
import Banner from '../NewCars/Banner';
import SingleService from './SingleService';
import { useLoaderData } from 'react-router-dom';
import serviceImg from '../../assets/services/1.jpg'
const Repairs = () => {
    const data = useLoaderData();
    console.log(data);
    const [services, setServices] = useState(data);
    const [popularServices, setPopularServices] = useState(data);
    const filterServices = (event) => {
        event.preventDefault();
        const form = event.target;
        const lo = form.lo.value;
        const hi = form.hi.value;
        const tmp = data.filter(service => (service.price >= lo) && (service.price <= hi));
        setServices(tmp)
        console.log(hi, lo);
    }
    useEffect(() => {
        let newServices = [];
        for (let i = 0; i < 1; i += 2) {
            newServices.push(data[i]);
        }
        setPopularServices(newServices)
    }, [data])
    return (
        <div>
            <Banner>{serviceImg}</Banner>
            <div className='md:flex md:flex-row-reverse justify-center'>
                <div className='md:w-1/3 p-8 '>
                    <div className='flex justify-center '>
                        <div>
                            <h3 className='text-center font-light text-xl text-[#478f00]'>Filter By Price ($)</h3>
                            <div className="">
                                <form onSubmit={filterServices} className="card-body">
                                    <div className="flex justify-around items-center ">

                                        <div className='w-24'>
                                            <input type="text" name='lo' placeholder="10000" className="input input-bordered w-full" required />
                                        </div>
                                        <span className='mx-2'>to</span>
                                        <div className='w-24 mr-2'>
                                            <input type="text" name='hi' placeholder="50000" className="input input-bordered w-full" required />
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
                        <h2 className='text-xl text-center font-semibold '>POPULAR SERVICES</h2>
                        {
                            popularServices.map(service => <SingleService repair={true} key={service._id} service={service}></SingleService>)
                        }
                    </div>
                </div>
                <div className=' p-8 md:w-2/3'>
                    <h2 style={{ borderBottom: '3px solid #c0d6fa' }} className='py-4 text-center text-3xl font-semibold mb-8 text-[#6078e7]'>CHOOSE YOUR AFFORDABLE SERVICE</h2>

                    <div className='grid lg:grid-cols-3 md:grid-cols-2 justify-around gap-4'>

                        {
                            services.map(service => <SingleService key={service._id} service={service}></SingleService>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Repairs;