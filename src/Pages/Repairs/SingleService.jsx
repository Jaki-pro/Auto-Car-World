import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({service}) => {
    return (
        <div className="card  w-full bg-base-100 shadow-xl mx-auto mx-4 border-2 p-2">
            <figure className="w-full mx-auto h-1/2 hover:animate-pulse rounded-lg">
                <img src={`https://auto-car-world-server-jaki-pro-jakaria-hossains-projects.vercel.app/${service.img}`} alt="Shoes" className="rounded-xl p-4 size-full"   />
            </figure>
            <div className="card-body items-center text-justify bg-indigo-100  p-4 rounded-t-lg">
                <h2 className="serviced-title font-bold">{service.title}</h2>
                <p>{service.description.slice(0, 80)}..</p>
                <div className="w-full flex justify-between items-center">
                    <p className='text-[green] font-bold'>Price: {service.price}$</p>
                    <Link to={`/serviceDetails/${service._id}`}><button className="btn btn-primary">Explore</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;