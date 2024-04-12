import React, { useEffect, useState } from 'react';
import axios from 'axios'
// import dd from '../../../images'
const AddServices = () => {
    const [image, setImage] = useState();
    const [allImages, setAllImages] = useState([]);
    const [update, setUpdate] = useState(false);
    const [currentServices, setCurrentServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/repairs')
            .then(res => res.json())
            .then(data => setCurrentServices(data));
    }, [update])
    const onInputChange = (e) => {
        console.log(e.target.files[0]);
        setImage(e.target.files[0])
    }
    const handleAddCar = (event) => {

        event.preventDefault();
        const form = event.target;
        const service_id = form.service_id.value;  
        const title = form.title.value;  
        const price = form.price.value; 
        const description = form.description.value;
        const facility1 = form.facility1.value;
        const facility2 = form.facility2.value;
        const facility3 = form.facility3.value;
        const facility4 = form.facility4.value;
        const img = image;
        const addCar = {
            service_id, 
            title,  
            price, 
            img,  
            description,
            facility: [facility1, facility2, facility3, facility4]
        }
        axios.post(
            'http://localhost:5000/repairs',
            addCar,
            {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
        )
        .then(data => setUpdate(!update))
        .catch(err => console.log(err))

    }
    // console.log(currentServices);
    return (
        <div>
            <div className="hero min-h-screen">

                <div className="hero-content flex-col">
                    <h1 className='pt-8 text-3xl font-semibold text-[#0c228d] border-b-2 border-[white] p-4 mb-4 font-serif' >ADD SERVICE TO STOCK</h1>

                    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">

                        <form onSubmit={handleAddCar} className="card-body">
                            <div className="grid md:grid-cols-2 ">
                                <div className='p-4'>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Service ID</span>
                                        </label>
                                        <input type="text" name='service_id' placeholder = {currentServices?.length+1} className="input-primary input input-bordered w-full" required />
                                    </div>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Service Name</span>
                                        </label>
                                        <input type="text" name='title' placeholder="Engine Oil Change" className="input-primary input input-bordered w-full" required />
                                    </div>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" name='price' placeholder="Price of the Service" className="input-primary input input-bordered w-full" required />
                                    </div>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Upload an image of the Car</span>
                                        </label>
                                        <input type="file" onChange={onInputChange} className="input-primary file-input file-input-bordered  w-full max-w-xs" required />

                                    </div>
                                    
                                    <div className='w-full mb-2'>
                                        <label className="label">
                                            <span className="label-text">Description</span>
                                        </label>
                                        <textarea name='description' placeholder="Say something.." className="input-primary textarea textarea-bordered textarea-lg w-full " ></textarea>
                                    </div>
                                </div>
                                <div className='p-4'>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Facility-1</span>
                                        </label>
                                        <input type="text" placeholder="facility" name='facility1' className="input-primary input input-bordered w-full" required />
                                    </div>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Facility-2</span>
                                        </label>
                                        <input type="text" placeholder="facility" name='facility2' className="input-primary input input-bordered w-full" required />
                                    </div>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Facility-3</span>
                                        </label>
                                        <input type="text" placeholder="facility" name='facility3' className="input-primary input input-bordered w-full" required />
                                    </div>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Facility-4</span>
                                        </label>
                                        <input type="text" placeholder="facility" name='facility4' className="input-primary input input-bordered w-full" required />
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
            {/* <form onSubmit={submitImage}>
                <input type="file" name="" accept='image/*' onChange={onInputChange} id="" />
                <input type="submit" className='btn btn-primary' value="Submit" />
            </form>
              
               {allImages.map(img=><img key={img._id} src={`http://localhost:5000/${img.img}`} alt="fgdfg" />)} */}

        </div>
    );
};

export default AddServices;