import React from 'react';
import Banner from '../NewCars/Banner';
import SingleService from './SingleService';
import { useLoaderData } from 'react-router-dom';

const Repairs = () => {
    const services = useLoaderData();
    return (
        <div>
            <Banner repair={true}></Banner>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 justify-around gap-4 p-8'>
                {
                    services.map(service => <SingleService repair={true} key={service._id} service={service}></SingleService>)
                }
            </div>
        </div>
    );
};

export default Repairs;