import React, { useEffect, useState } from 'react';
import car1 from '../../../assets/featured-vehicle/car1.png'
import car2 from '../../../assets/featured-vehicle/car2.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
const FeaturedVehicle = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    dots: true,
                    speed: 1000,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    speed: 1000,
                }
            }
        ]
    };
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json()
                .then(data => setCars(data)))
    }, []);
    // console.log(cars);
    return (
        <div className='mt-12'>
            <div className='text-center mb-8 '>
                <h1 className='text-2xl font-extralight mb-4'>-CHECK OUR RECENT CARS-</h1>
                <h1 className='text-5xl font-bold font-serif'>Featured Vehicles</h1>
            </div>
            <div className="container   p-8 mx-auto">
                <Slider {...settings}>
                    {
                        cars.map((item) => (
                            <div key={item.car_id} >
                                <div style={{ marginRight: '16px' }}className='card   bg-[#9496f7]   border-2 h-72'>
                                    <div className=' flex justify-center items-center'>
                                        <img src={item.img} alt="" className='p-2' />
                                    </div>
                                    <div className='flex justify-around p-4'>
                                        <div>
                                            <h1 className='text-2xl text-white'>{item.company} {item.model}</h1>
                                            <p>Price {item.price} $</p>
                                        </div>
                                        <Link to={`/carDetails/${item._id}`}><button className="btn btn-warning">Explore</button></Link>

                                    </div>

                                </div>
                            </div>

                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};


export default FeaturedVehicle;