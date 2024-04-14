import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { addToDb } from '../../../utilities/fakedb';
import Swal from 'sweetalert2'

const OrderRequest = () => {
    const service = useLoaderData();
    const { user, cartCnt, setCartCnt } = useContext(AuthContext);
    let cnt = 0;
    const { price, title, description, _id, service_id, img, facility } = service;

    const handleBook = (event) => {
        event.preventDefault();
        const form = event.target;
        const customerName = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const date = form.date.value;
        const img = form.img.value;
        const title = form.title.value;
        const order = {
            customerName,
            title,
            service_id,
            email,
            price,
            date,
            img,
            status: 'Pending'
        }
        //console.log(order);
        user ?
            fetch('http://localhost:5000/booking-service', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                }) :
            addToDb(service_id, "shopping_cart_service");
        setCartCnt(!cartCnt)
        Swal.fire({
            position: "top-middle",
            icon: "success",
            title: "Order Done!",
            showConfirmButton: false,
            timer: 1500
        });

    }

    return (
        <div className="hero min-h-screen rounded-md">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                    <div className='flex justify-center'>
                        <img src={img} alt="" className='rounded-md' />
                    </div>
                    <form onSubmit={handleBook} className="card-body">
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
                                        <span className="label-text">Service</span>
                                    </label>
                                    <input type="text" name='title' defaultValue={title} placeholder={title} className="input input-bordered w-full" required />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" defaultValue={price} name='price' placeholder={price} className="input input-bordered w-full" required />
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
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="text" name='img' defaultValue={img} placeholder='image' className="input input-bordered w-full" required />
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
                            <button className="btn btn-primary">Order Request</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderRequest;