import React, { useRef, useState } from 'react';
import oldCar2 from '../../assets/featured-vehicle/old-car2.jpg'
import Banner from '../NewCars/Banner';
import axios from 'axios';
import Swal from 'sweetalert2';
const SellCar = () => {
    const [image, setImage] = useState()
    const onInputChange = (e) => {
        console.log(e.target.files[0]);
        setImage(e.target.files[0])
    }
    //console.log(image);
    const handlePostCar = (event) => {

        event.preventDefault();
        const form = event.target;
        const sellerName = form.name.value;
        const brand = form.brand.value;
        const email = form.email.value;
        const price = form.price.value;
        const model = form.model.value;
        const date = form.date.value;
        const times = form.times.value;
        const description = form.description.value;
        const contactNo = form.contactNo.value;
        const img = image;
        const postCar = {
            sellerName,
            email,
            brand,
            model,
            price,
            times,
            img,
            date,
            description,
            contactNo
        }

        axios.post(
            'https://auto-car-world-server-jaki-pro-jakaria-hossains-projects.vercel.app/old-cars',
            postCar,
            {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
        )
            .then(data => {
                Swal.fire({
                    position: "top-middle",
                    icon: "success",
                    title: "Congrats.Your car has been post in old car collection!",
                    showConfirmButton: false,
                    timer: 2500
                });
            })
            .catch(err => console.log(err))

    }
    return (
        <div>
            <Banner>{oldCar2}</Banner>
            <div className="hero min-h-screen">

                <div className="hero-content flex-col">
                    <h1 className='pt-8 text-xl sm:text-3xl font-semibold text-[#0c228d] border-b-2 border-[white] p-4 mb-4 font-serif text-center' >POST YOUR CAR HERE WITH DETAILS INFORMATIN</h1>

                    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">

                        <form onSubmit={handlePostCar} className="card-body">
                            <div className="grid md:grid-cols-2 ">
                                <div className='p-4'>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="Your Name" className="input-primary input input-bordered w-full" required />
                                    </div>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Brand</span>
                                        </label>
                                        <input type="text" name='brand' placeholder="Name of Brand" className="input-primary input input-bordered w-full" required />
                                    </div>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" name='price' placeholder="Price of Your Car" className="input-primary input input-bordered w-full" required />
                                    </div>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Upload an image of your Car</span>
                                        </label>
                                        <input type="file" onChange={onInputChange} className="input-primary file-input file-input-bordered  w-full max-w-xs" required />

                                    </div>
                                    <div className='w-full mb-2'>
                                        <label className="label">
                                            <span className="label-text">Write why you are selling</span>
                                        </label>
                                        <textarea name='description' placeholder="Say something.." className="input-primary textarea textarea-bordered textarea-lg w-full " ></textarea>
                                    </div>
                                </div>
                                <div className='p-4'>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="Your Email" name='email' className="input-primary input input-bordered w-full" required />
                                    </div>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Model</span>
                                        </label>
                                        <input type="text" name='model' placeholder='Model of Your Car' className="input-primary input input-bordered w-full" required />
                                    </div>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Used time (Month)</span>
                                        </label>
                                        <input type="text" name='times' placeholder="Ages you're using" className="input-primary input input-bordered w-full" required />
                                    </div>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Date</span>
                                        </label>
                                        <input type="date" name='date' placeholder="Your Name" className="input-primary input input-bordered w-full" required />
                                    </div>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Contact No</span>
                                        </label>
                                        <input type="text" name='contactNo' placeholder="Contact Number" className="input-primary input input-bordered w-full" required />
                                    </div>
                                </div>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">POST</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellCar;