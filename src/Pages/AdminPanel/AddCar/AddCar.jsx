import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2';
// import dd from '../../../images'
const AddCar = () => {
    const [image, setImage] = useState();
    const [allImages, setAllImages] = useState([]);
    const [update, setUpdate] = useState(false);
    const [currentCars, setCurrentCars] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setCurrentCars(data));
    }, [update])
    const onInputChange = (e) => {
        console.log(e.target.files[0]);
        setImage(e.target.files[0])
    }
    const handleAddCar = (event) => {

        event.preventDefault();
        const form = event.target;
        const car_id = form.car_id.value;
        const color = form.color.value;
        const engine = form.engine.value;
        const company = form.company.value;
        const fuel_type = form.fuel_type.value;
        const price = form.price.value;
        const model = form.model.value;
        const mileage = form.mileage.value;
        const year = form.year.value;
        const transmission = form.transmission.value;
        const description = form.description.value;
        const feature1 = form.feature1.value;
        const feature2 = form.feature2.value;
        const feature3 = form.feature3.value;
        const img = image;
        const addCar = {
            car_id,
            color,
            company,
            model,
            price,
            engine,
            year,
            fuel_type,
            img,
            transmission,
            mileage,
            description,
            options: [feature1, feature2, feature3]
        }
        axios.post(
            'http://localhost:5000/cars',
            addCar,
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
                    title: "Car Added!",
                    showConfirmButton: false,
                    timer: 1500
                });
                setUpdate(!update);
            })
            .catch(err => console.log(err))

    }

    return (
        <div>
            <div className="hero min-h-screen">

                <div className="hero-content flex-col">
                    <h1 className='pt-8 text-3xl font-semibold text-[#0c228d] border-b-2 border-[white] p-4 mb-4 font-serif' >ADD CAR TO STOCK</h1>

                    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">

                        <form onSubmit={handleAddCar} className="card-body">
                            <div className="grid md:grid-cols-2 ">
                                <div className='p-4'>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Car ID</span>
                                        </label>
                                        <input type="text" disabled name='car_id' placeholder={currentCars.length + 1} className="input-primary input input-bordered w-full" required />
                                    </div>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Color</span>
                                        </label>
                                        <input type="text" name='color' placeholder="Red" className="input-primary input input-bordered w-full" required />
                                    </div>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Price ($)</span>
                                        </label>
                                        <input type="text" name='price' placeholder="Price of the Car" className="input-primary input input-bordered w-full" required />
                                    </div>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Upload an image of the Car</span>
                                        </label>
                                        <input type="file" onChange={onInputChange} className="input-primary file-input file-input-bordered  w-full max-w-xs" required />

                                    </div>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Engine</span>
                                        </label>
                                        <input type="text" name='engine' placeholder='1.5L Inline-4' className="input-primary input input-bordered w-full" required />

                                    </div>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Fuel Type</span>
                                        </label>
                                        <input type="text" name='fuel_type' placeholder='Dijel' className="input-primary input input-bordered w-full" required />

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
                                            <span className="label-text">Company</span>
                                        </label>
                                        <input type="text" placeholder="Toyota" name='company' className="input-primary input input-bordered w-full" required />
                                    </div>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Model</span>
                                        </label>
                                        <input type="text" name='model' placeholder='T-GSX-45' className="input-primary input input-bordered w-full" required />
                                    </div>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Launch Year</span>
                                        </label>
                                        <input type="text" name='year' placeholder="2024" className="input-primary input input-bordered w-full" required />
                                    </div>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Mileage</span>
                                        </label>
                                        <input type="text" name='mileage' placeholder="2000" className="input-primary input input-bordered w-full" required />
                                    </div>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Transmission</span>
                                        </label>
                                        <input type="text" name='transmission' placeholder="Manual" className="input-primary input input-bordered w-full" required />
                                    </div>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Feature-1</span>
                                        </label>
                                        <input type="text" name='feature1' placeholder="Backup camera" className="input-primary input input-bordered w-full" required />
                                    </div>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Feature-2</span>
                                        </label>
                                        <input type="text" name='feature2' placeholder="Bluetooth connectivity" className="input-primary input input-bordered w-full" required />
                                    </div>
                                    <div className='mb-2'>
                                        <label className="label">
                                            <span className="label-text">Feature-3</span>
                                        </label>
                                        <input type="text" name='feature3' placeholder="Keyless entry" className="input-primary input input-bordered w-full" required />
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

export default AddCar;