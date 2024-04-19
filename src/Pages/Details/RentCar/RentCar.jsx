import React, { useContext, useState } from 'react';
import { Link, Navigate, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { addToDb } from '../../../utilities/fakedb';
import Swal from 'sweetalert2'

const RentCar = () => {
    const car = useLoaderData();
    const { user, cartCnt, setCartCnt } = useContext(AuthContext);
    let cnt = 0;
    const { company, _id, model, price, img, car_id } = car;
    const rentPrice = parseInt(price / 1000);
    const [days, setDays] = useState(1);
    const handleRent = (event) => {
        event.preventDefault();
        const form = event.target;
        const customerName = form.name.value;
        const email = form.email.value; 
        const date = form.date.value;
        const company = form.company.value;
        const order = {
            customerName,
            email,
            price: rentPrice * days,
            days,
            date,
            car_id,
            company,
            img,
            status: 'pending'
        }
        console.log(order);
        fetch('https://auto-car-world-server-jaki-pro-jakaria-hossains-projects.vercel.app/rent-car', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                setCartCnt(!cartCnt)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Rent Done!",
                    showConfirmButton: false,
                    timer: 1500
                });
            })

    }

    return (
        <div className="hero min-h-screen rounded-md">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                    <div className='flex justify-center'>
                        <img src={img} alt="" className='rounded-md' />
                    </div>
                    <form onSubmit={handleRent} className="card-body">
                        <div className="grid md:grid-cols-2 ">
                            <div className='p-4'>
                                <div className=''>
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered w-full" required />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Company</span>
                                    </label>
                                    <input type="text" name='company' defaultValue={company} placeholder={company} className="input input-bordered w-full" required />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Rent of {days} day{days > 1 && 's'}($)</span>
                                    </label>
                                    <div className='flex justify-items-around items-center'>

                                        <button onClick={() => setDays(days + 1)} className='btn'>+</button><p className='border-2 rounded-lg text-center p-2'>{rentPrice*days}</p><button onClick={() => days > 1 && setDays(days - 1)} className='btn'>-</button>
                                    </div>
                                </div>
                            </div>
                            <div className='p-4'>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="Your Email" defaultValue={user?.email} name='email' className="input input-bordered w-full" required />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" name='date' placeholder="Your Name" className="input input-bordered w-full" required />
                                </div>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Rent Request</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RentCar;