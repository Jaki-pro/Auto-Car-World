import React from 'react';
import { Link } from 'react-router-dom';

const SingleCar = ({car}) => {
    return (
        <div className="card  w-full bg-base-100 shadow-xl mx-auto mx-4 border-2 p-2">
            <figure className="w-full mx-auto md:h-1/3 hover:animate-pulse p-4">
                <img  src={`http://localhost:5000/${car.img}`}  alt="Shoes" className="rounded-xl p-4" />
            </figure>
            <div className="card-body items-center text-center bg-indigo-100  p-4 rounded-t-lg"> 
                <h2 className="card-title">{car.company}</h2>
                <p>{car.description.slice(0, 80)}..</p>
                <div className="w-full card-actions flex justify-between items-center">
                    <p>Price: {car.price}$</p>
                    <Link to={`/carDetails/${car._id}`}><button className="btn btn-primary">Explore</button></Link>
                    

                </div>
            </div>
        </div>
    );
};

export default SingleCar;