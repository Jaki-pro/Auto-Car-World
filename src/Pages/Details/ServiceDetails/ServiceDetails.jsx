import React from 'react';
import { RiH3 } from 'react-icons/ri';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    let cnt = 0;
    const { price, title, description, _id, img, facility  } = service;
    let facilityCnt  = 0;
    // console.log(options);
    return (

        <div className="card w-2/3 bg-base-100 shadow-xl mx-auto">
            <figure className='bg-indigo-300'><img className='w-2/3 animate-pulse'  src={`https://auto-car-world-server-jaki-pro-jakaria-hossains-projects.vercel.app/${img}`} alt="Shoes" /></figure>
            <div className="card-body bg-indigo-200">
                <h2 className="">
                    <div className=''>
                        <p className='text-3xl font-bold'>{title}</p> 
                    </div> 
                </h2>
                <p className='text-justify'>{description.slice(0, 400)}</p>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-2xl font-semibold'>New Updates</h1>
                        <hr />
                        <div>
                            {
                                 
                                facility.map(element=> <h3 key={facilityCnt++}>{element}</h3>)
                            }

                        </div>
                    </div>
                    <div>
                         
                    </div>
                </div>
                <hr />
                <div className=' flex justify-between items-center ' >
                    <p className='text-[green] font-bold mr-2'>Price: {price} $</p>
                    <Link to={`/order-request-service/${_id}`}><button className='btn btn-primary'>Order Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;