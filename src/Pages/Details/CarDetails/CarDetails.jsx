import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const CarDetails = () => {
    const car = useLoaderData();
    let cnt=0;
    const {user} = useContext(AuthContext);
    const { company, model, _id, price, img, year, transmission, fuel_type, color, description, options, engine } = car;
    // console.log(options);
    return (
        
        <div className="card w-2/3 bg-base-100 shadow-xl mx-auto">
            <figure className='bg-indigo-300'><img className='w-2/3 animate-pulse' src={`http://localhost:5000/${img}`} alt="Shoes" /></figure>
            <div className="card-body bg-indigo-200">
                <h2 className="">
                    <div className='flex justify-between'>
                        <p className='text-3xl'>{company}</p>
                        <p className='font-semibold'>Color: {color}</p>
                    </div>
                    <div>
                        {model}
                        <div className="badge badge-secondary"> NEW</div>
                    </div>
                </h2>
                <p>{description}</p>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-2xl font-semibold'>New Updates</h1>
                        <hr />
                        <ul>
                            {
                                options.map(e => (
                                    <li key={cnt++} className='font-light'>-{e}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h1 className='text-2xl font-semibold'>About</h1>
                        <hr />
                        <h4>Year: {year}</h4>
                        <h4>Engine: {engine}</h4>
                        <h4>Fuel Type: {fuel_type}</h4>
                        <h4>Transmission: {transmission}</h4>
                    </div>
                </div>
                <hr />
                <div className=' flex justify-between items-end'>
                    <div>

                        <p className='text-[green] font-bold'>Price: {price} $</p> 
                        <Link to={`/order-request/${_id}`}><button className='btn btn-primary'>Order Now</button></Link>
                    </div>
                    <Link onClick={()=>!user&&alert('you should login first')} to={user?.email?`/rent-car/${_id}`:'/login'}><button className='btn btn-primary'>Apply for Rent</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;