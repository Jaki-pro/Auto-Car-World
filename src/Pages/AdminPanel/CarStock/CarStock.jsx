import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';

const CarStock = () => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div className='flex'>
            <Profile></Profile>
            <div className='flex justify-around bg-[#62cdd1] w-full'>
                <div className='md:p-16'> 
                <h1 className='text-center text-3xl font-bold text-[white]'>Car Stock: {`(${cars.length})`}</h1>
                
                    <div className="overflow-x-auto">
                        <table className="table ">
                            {/* head */}
                            <thead>
                                <tr>

                                    <th  className='text-lg'>Car Id</th>
                                    <th className=''></th>
                                    <th className=''></th>
                                    <th className='text-lg'>Car image</th>
                                    <th className=''></th>
                                    <th className=''></th>
                                    <th className='text-lg'>Company name</th> 
                                    <th className=''></th>
                                    <th className=''></th>
                                    <th className='text-lg'>Model</th> 
                                    <th className=''></th>
                                    <th className=''></th>
                                    <th className='text-lg'>Price($)</th> 
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    cars.map(car => <tr className='bg-indigo-300' key={car._id}>

                                        <td className='text-lg font-bold'>
                                            {car.car_id}
                                        </td>
                                        <td className=''> 
                                        </td>
                                        <td className=''> 
                                        </td>
                                        <td className=''>
                                            <img className='size-16 rounded-full'  src={`http://localhost:5000/${car.img}`} alt="" />
                                            <br />
                                        </td>
                                        <td className=''> 
                                        </td>
                                        <td className=''> 
                                        </td>
                                        <td className='text-lg font-bold'>{car.company}</td>
                                        <td className=''> 
                                        </td>
                                        <td className=''> 
                                        </td>
                                        <td className='text-lg font-bold'>{car.model}</td>
                                        <td className=''> 
                                        </td>
                                        <td className=''> 
                                        </td>
                                        <td className='text-lg font-bold'>{car.price}</td>
                                    </tr>)
                                }



                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CarStock;