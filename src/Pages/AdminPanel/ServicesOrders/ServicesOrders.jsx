import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';

const ServicesOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/bookings-service')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/bookings-service/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                const exist = orders.find(order => order._id == id);
                const remaining = orders.filter(order => order._id != id);
                exist.status = 'Accepted',
                    setOrders([exist,...remaining]);
            })


    }
    console.log(orders);
    return (
        <div className='flex'>
            <Profile></Profile>
            <div className='flex justify-around bg-[#9edaff] w-full'>
                <div className='md:p-16'>
                    <h2 className='text-2xl text-center'>Total: ({orders.length})</h2>
                    <div className="overflow-x-auto">
                        <table className="table ">
                            {/* head */}
                            <thead>
                                <tr>

                                    <th className='text-lg'>Service Id</th>
                                    <th className='text-lg'>Email</th>
                                    <th className='text-lg'>Customer Name</th>
                                    <th className='text-lg'>Price ($)</th>
                                    <th className='text-lg'></th>
                                    <th className='text-lg'>Date</th>
                                    <th className='text-lg'>Service name</th>
                                    <th className='text-lg'>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    orders.map(order => <tr className='bg-indigo-300' key={order._id}>

                                        <td className='text-lg font-bold'>
                                            {order.service_id}
                                        </td>
                                        <td className=''>
                                            {order.email}
                                        </td>
                                        <td className=''>
                                            {order.customerName}
                                        </td>
                                        <td className=''>
                                            {order.price}
                                        </td>
                                        <td className=''>
                                        </td>
                                        <td className=''>
                                            {order.date}
                                        </td>
                                        <td className='text-lg font-bold'>{order.title}</td>
                                        <td onClick={() => handleUpdate(order._id)} className='text-lg font-bold'>
                                            {
                                                order?.status == 'Accepted' ? <p className='text-[green]'>{order?.status}</p> : <p className='cursor-pointer text-[blue]'>Confirm</p>
                                            }
                                        </td>
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

export default ServicesOrders;