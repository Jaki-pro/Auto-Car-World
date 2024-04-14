import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile'; 
const ServiceStock = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/repairs')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='flex'>
            <Profile></Profile>
            <div className='flex justify-around bg-[#62cdd1] w-full'>
                <div className='md:p-16'> 
                <h1 className='text-center  text-3xl font-bold text-[white]'>Service Stock: {`(${services.length})`}</h1>
                    <div className="overflow-x-auto">
                        <table className="table ">
                            {/* head */}
                            <thead>
                                <tr>

                                    <th  className='text-lg'>Service Id</th>
                                    <th className=''></th>
                                    <th className=''></th>
                                    <th className='text-lg'>Image</th>
                                    <th className=''></th>
                                    <th className=''></th>
                                    <th className='text-lg'>Service Name</th> 
                                    <th className=''></th>
                                    <th className=''></th>
                                    <th className='text-lg'>price($)</th> 
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    services.map(service => <tr className='bg-indigo-300' key={service._id}>

                                        <td className='text-lg font-bold'>
                                            {service.service_id}
                                        </td>
                                        <td className=''> 
                                        </td>
                                        <td className=''> 
                                        </td>
                                        <td className=''>
                                            <img className='size-16 rounded-full' src={`http://localhost:5000/${service.img}`} alt="" />
                                            <br />
                                        </td>
                                        <td className=''> 
                                        </td>
                                        <td className=''> 
                                        </td>
                                        <td className='text-lg font-bold'>{service.title}</td>
                                        <td className=''> 
                                        </td>
                                        <td className=''> 
                                        </td>
                                        <td className='text-lg font-bold'>{service.price}</td>
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

export default ServiceStock;