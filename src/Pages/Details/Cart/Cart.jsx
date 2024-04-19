import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Row from './Row';
import RowServices from './RowServices';
import { deleteFromDb, getStoredCart } from '../../../utilities/fakedb';
import Swal from 'sweetalert2'


const Cart = (props) => {
    const { user, loading, cartCnt, setCartCnt } = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);
    const [rentCars, setRentCars] = useState([]);
    const [bookingsService, setBookingsService] = useState([]);
    const [carCollection, setCarCollection] = useState([]);
    const [serviceCollection, setServiceCollection] = useState([]);
    const [localBookings, setLocalBookings] = useState([]);
    const [localBookingsService, setLocalBookingsService] = useState([]);
    const url = `https://auto-car-world-server-jaki-pro-jakaria-hossains-projects.vercel.app/bookings?email=${user?.email}`;
    const url_rent = `https://auto-car-world-server-jaki-pro-jakaria-hossains-projects.vercel.app/rent-car?email=${user?.email}`;
    const url_services = `https://auto-car-world-server-jaki-pro-jakaria-hossains-projects.vercel.app/bookings-service?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
        fetch(url_services)
            .then(res => res.json())
            .then(data => setBookingsService(data))
        fetch('https://auto-car-world-server-jaki-pro-jakaria-hossains-projects.vercel.app/cars')
            .then(res => res.json())
            .then(data => setCarCollection(data))
        fetch('https://auto-car-world-server-jaki-pro-jakaria-hossains-projects.vercel.app/repairs')
            .then(res => res.json())
            .then(data => setServiceCollection(data))
        fetch(url_rent)
            .then(res => res.json())
            .then(data => setRentCars(data))

    }, [cartCnt])
    // console.log('rent', rentCars);
    let key1 = 0;
    // console.log(serviceCollection);
    // Local storage Bookings
    useEffect(() => {
        //console.log(products);
        // Local bookings of car
        const storedCart = getStoredCart("shopping_cart")
        console.log('local car', storedCart);
        let newCart = [];
        for (const i in storedCart) {
            const exist = carCollection.find(car => car.car_id == i);
            if (exist) {
                let count = storedCart[i];
                for (let j = 0; j < count; j++) {
                    newCart.push(exist);
                }
            }
        }
        setLocalBookings(newCart);
        // Local bookings of service
        const storedService = getStoredCart("shopping_cart_service")
        // console.log(storedService);
        newCart = [];
        for (const i in storedService) {
            const exist = serviceCollection.find(service => service.service_id == i);
            if (exist) {
                let count = storedService[i];
                for (let j = 0; j < count; j++) {
                    newCart.push(exist);
                }
            }
        }
        //console.log(newCart);
        setLocalBookingsService(newCart);
    }, [carCollection, serviceCollection])
    // console.log(localBookings);

    // Delete car
    const handleDeleteCar = (car_id, _id, isRent) => {
        // Sweet alert
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => { 
            if (result.isConfirmed) {
                // Delete if item is stored in database
                if (isRent) {
                    // console.log(isRent);
                    fetch(`https://auto-car-world-server-jaki-pro-jakaria-hossains-projects.vercel.app/rent-car/${_id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                const remaining = rentCars.filter(rent => rent._id != _id);
                                setCartCnt(!cartCnt)
                                setRentCars(remaining);
                            }
                        })
                    return;
                }
                if (_id) {
                    // console.log(_id);
                    fetch(`https://auto-car-world-server-jaki-pro-jakaria-hossains-projects.vercel.app/bookings/${_id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                const remaining = bookings.filter(booking => booking._id != _id);
                                setBookings(remaining);
                            }
                        })
                    setCartCnt(!cartCnt); 
                }
                // console.log('asho');
                // Delete if item is stored in local storage
                deleteFromDb(car_id, "shopping_cart");
                const storedCart = getStoredCart("shopping_cart");
                console.log("storedCart", storedCart);
                if (storedCart) {
                    let newCart = [];
                    for (const i in storedCart) {
                        const exist = carCollection.find(car => car.car_id == i);
                        if (exist) {

                            let count = storedCart[i];
                            for (let j = 0; j < count; j++) {
                                newCart.push(exist);
                            }
                        }
                    }
                    setLocalBookings(newCart);
                    setCartCnt(!cartCnt);
                }
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });


    }



    //Delete Services
    const handleDeleteService = (service_id, _id) => {

        // Sweet alert
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // Delete if item is stored in database
                if (_id) {
                    fetch(`https://auto-car-world-server-jaki-pro-jakaria-hossains-projects.vercel.app/bookings-service/${_id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                const remaining = bookingsService.filter(booking => booking._id != _id);
                                setBookingsService(remaining);
                                setCartCnt(!cartCnt);
                            }
                        })
 
                }
                // Delete if item is stored in local storage
                deleteFromDb(service_id, "shopping_cart_service");
                const storedCart = getStoredCart("shopping_cart_service");
                console.log("storedCart", storedCart);
                if (storedCart) {
                    let newCart = [];
                    for (const i in storedCart) {
                        const exist = serviceCollection.find(service => service.service_id == i);
                        if (exist) {

                            let count = storedCart[i];
                            for (let j = 0; j < count; j++) {
                                newCart.push(exist);
                            }
                        }
                    }
                    setCartCnt(!cartCnt);
                    setLocalBookingsService(newCart);
                }
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

    }
    
    return (
        <div className='p-16 '>
            <h1 className='text-3xl text-center mb-8'>My Bookings: {localBookings.length + bookings.length + localBookingsService.length + rentCars.length + bookingsService.length}</h1>
            <div className="overflow-x-auto border-2">
                <h1 className='text-3xl font-semibold text-center p-4'>Cars: {localBookings.length + bookings.length}</h1>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Cancel
                            </th>
                            <th>Image</th>
                            <th>Company</th>
                            <th>Price($)</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            //Local storage Bookings
                            localBookings.map(booking => <Row key={key1++} handleDeleteCar={handleDeleteCar} booking={booking}></Row>)

                        }
                        {
                            // Database Bookings 
                            bookings.map(booking => <Row key={booking._id} handleDeleteCar={handleDeleteCar} booking={booking}></Row>)
                        }

                    </tbody>

                </table>
            </div>
            <div className="overflow-x-auto mt-8 border-2">
                <h1 className='text-3xl font-semibold text-center p-4'>Repairs: {localBookingsService.length + bookingsService.length}</h1>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Cancel
                            </th>
                            <th>Image</th>
                            <th>Service Name</th>
                            <th>Price($)</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            //Local storage Bookings
                            localBookingsService.map(booking => <RowServices key={key1++} handleDeleteService={handleDeleteService} booking={booking}></RowServices>)

                        }
                        {
                            //Database  Bookings
                            bookingsService.map(booking => <RowServices key={booking._id} handleDeleteService={handleDeleteService} booking={booking}></RowServices>)

                        }

                    </tbody>

                </table>
            </div>
            <div className="overflow-x-auto mt-8 border-2">
                <h1 className='text-3xl font-semibold text-center p-4'>Rent Cars: {rentCars.length}</h1>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                Cancel
                            </th>
                            <th>Image</th>
                            <th>Company</th>
                            <th>Days</th>
                            <th>Price($)</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            //Local storage Bookings
                            rentCars.map(booking => <Row key={key1++} handleDeleteCar={handleDeleteCar} booking={booking}></Row>)

                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};


export default Cart;