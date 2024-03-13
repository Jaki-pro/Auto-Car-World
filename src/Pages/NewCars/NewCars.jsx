import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCar from './SingleCar';
import Banner from './Banner';

const NewCars = () => {
    const cars = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 justify-around gap-4 p-8'>
                {
                    cars.map(car => <SingleCar key={car._id} car={car}></SingleCar>)
                }
            </div>
        </div>
    );
};

export default NewCars;