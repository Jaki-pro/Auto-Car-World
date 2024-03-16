import React, { useRef, useState } from 'react';
import choose from '../../assets/choose.png'
const SellCar = () => {
    const [image, setImage] = useState("")
    const convertToBase64 = (event) => {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
            setImage(reader.result)
        }
        //console.log(event);
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

        fetch('http://localhost:5000/old-cars', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    const cnt = 0;
    return (
        <div className="hero min-h-screen">
             
            <div className="hero-content flex-col">
                <h1 className='pt-8 text-3xl font-semibold text-[#949494]'>Post Your Car Here</h1>
                <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                    <div className='flex justify-center'>
                        <img src={cnt} alt="" />
                    </div>
                    <form onSubmit={handlePostCar} className="card-body">
                        <div className="grid md:grid-cols-2 ">
                            <div className='p-4'>
                                <div className='mb-2'>
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full" required />
                                </div>
                                <div className='mb-2'>
                                    <label className="label">
                                        <span className="label-text">Brand</span>
                                    </label>
                                    <input type="text" name='brand' placeholder="Name of Brand" className="input input-bordered w-full" required />
                                </div>
                                <div className='mb-2'>
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name='price' placeholder="Price of Your Car" className="input input-bordered w-full" required />
                                </div>
                                <div className='mb-2'>
                                    <label className="label">
                                        <span className="label-text">Upload an image of your Car ( .jpg )</span>
                                    </label>
                                    <input type="file" onChange={convertToBase64}  className="file-input file-input-bordered  w-full max-w-xs" required/>
                                     
                                </div>
                                <div className='w-full mb-2'>
                                    <label className="label">
                                        <span className="label-text">Write something about your Car</span>
                                    </label>
                                    <textarea name='description' placeholder="Say something.." className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                                </div>
                            </div>
                            <div className='p-4'>
                                <div className='mb-2'>
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="Your Email" name='email' className="input input-bordered w-full" required />
                                </div>
                                <div className='mb-2'>
                                    <label className="label">
                                        <span className="label-text">Model</span>
                                    </label>
                                    <input type="text" name='model' placeholder='Model of Your Car' className="input input-bordered w-full" required />
                                </div>
                                <div className='mb-2'>
                                    <label className="label">
                                        <span className="label-text">Used time (Month)</span>
                                    </label>
                                    <input type="text" name='times' placeholder="Ages you're using" className="input input-bordered w-full" required />
                                </div>
                                <div className='mb-2'>
                                    <label className="label">
                                        <span className="label-text">Date</span>
                                    </label>
                                    <input type="date" name='date' placeholder="Your Name" className="input input-bordered w-full" required />
                                </div>
                                <div className='mb-2'>
                                    <label className="label">
                                        <span className="label-text">Contact No</span>
                                    </label>
                                    <input type="text" name='contactNo' placeholder="Contact Number" className="input input-bordered w-full" required />
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
    );
};

export default SellCar;