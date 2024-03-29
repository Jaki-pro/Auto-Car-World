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
            <figure className='bg-indigo-300'><img className='w-2/3 animate-pulse' src={img} alt="Shoes" /></figure>
            <div className="card-body bg-indigo-200">
                <h2 className="">
                    <div className=''>
                        <p className='text-3xl'>{title}</p> 
                    </div> 
                </h2>
                <p>{description.slice(0, 400)}</p>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-2xl font-semibold'>New Updates</h1>
                        <hr />
                        <div>
                            {
                                 
                                facility.map(element=> <h3 key={facilityCnt++}>{element.name}</h3>)
                            }

                        </div>
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>About</h1>
                        <hr />
                        <div>
                            {
                                 
                                facility.map(element=> <h3 key={facilityCnt++}>{element.details.slice(0,50)}</h3>)
                            }

                        </div>
                    </div>
                </div>
                <hr />
                <div className=' flex justify-around'>
                    <p className='text-[green] font-bold'>Price: {price} $</p>
                    <Link to={`/order-request-service/${_id}`}><button className='btn btn-primary'>Order Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;