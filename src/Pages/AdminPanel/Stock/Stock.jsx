import React, { useEffect, useState } from 'react';

const Stock = () => {
    const [cars, setCars] = useState([])
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://auto-car-world-server-jaki-pro-jakaria-hossains-projects.vercel.app/cars')
            .then(res => res.json())
            .then(data => setCars(data))
        fetch('https://auto-car-world-server-jaki-pro-jakaria-hossains-projects.vercel.app/repairs')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='flex justify-around'>  
            <div className=''>
                <h3 className='text-center'>Cars</h3>
                <div className="overflow-x-auto " >
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>car id</th>
                                <th>image</th>
                                <th>company</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cars.map(car => <tr key={car._id}>
                                    <td>
                                        {car.car_id}
                                        <br />
                                    </td>
                                    <td>
                                        <img className='size-12 rounded-full' src={car.img} alt="" />
                                    </td>
                                    <td>{car.company}</td>
                                </tr>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
            <div>
            <h3 className='text-center'>Services</h3>
                <div className="overflow-x-auto " >
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>car id</th>
                                <th>image</th>
                                <th>company</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                services.map(service => <tr key={service._id}>
                                    <td>
                                        {service.service_id}
                                        <br />
                                    </td>
                                    <td>
                                        <img className='size-12 rounded-full' src={service.img} alt="" />
                                    </td>
                                    <td>{service.title}</td>
                                </tr>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Stock;