import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Row from './Row';
import RowServices from './RowServices';
import { deleteFromDb, getStoredCart } from '../../../utilities/fakedb';
 
const Cart = (props) => { 
    const { user, loading, cartCnt, setCartCnt} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [bookingsService, setBookingsService] = useState([]);
    const [carCollection, setCarCollection] = useState([]);
    const [serviceCollection, setServiceCollection] = useState([]);
    const [localBookings, setLocalBookings] = useState([]);
    const [localBookingsService, setLocalBookingsService] = useState([]); 
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    const url_services = `http://localhost:5000/bookings-service?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
        fetch(url_services)
            .then(res => res.json())
            .then(data => setBookingsService(data))
        fetch('cars.json')
            .then(res => res.json())
            .then(data => setCarCollection(data))
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServiceCollection(data))
        
    }, [])
    let key1 = 0;
    console.log(bookings);
   // console.log(serviceCollection);
    // Local storage Bookings
    useEffect(() => {
        //console.log(products);
        // Local bookings of car
        const storedCart = getStoredCart("shopping_cart")
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
        console.log(storedService);
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
    }, [carCollection])
    //console.log(localBookings);

    // Delete car
    const handleDeleteCar = (car_id, _id) => {
        // Delete if item is stored in database
        if (_id) {
            fetch(`http://localhost:5000/bookings/${_id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = bookings.filter(booking => booking._id != _id);
                        setBookings(remaining);
                    }
                })
                return;
        }
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
        } 
    }
    //Delete Services
    const handleDeleteService = (service_id, _id) => {
        // Delete if item is stored in database
        if (_id) {
            fetch(`http://localhost:5000/bookings-service/${_id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = bookingsService.filter(booking => booking._id != _id);
                        setBookingsService(remaining);
                    }
                })
                return;
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
            setLocalBookingsService(newCart);
        } 
    } 
    useEffect(() => {

        setCartCnt(localBookings.length + bookings.length + localBookingsService.length + bookingsService.length )
    })
    return (
        <div className='p-16 '>
            <h1 className='text-3xl text-center mb-8'>My Bookings: {localBookings.length + bookings.length + localBookingsService.length + bookingsService.length }</h1>
            <div className="overflow-x-auto border-2">
            <h1 className='text-3xl font-semibold text-center p-4'>Cars: {localBookings.length + bookings.length  }</h1>
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
                <h1 className='text-3xl font-semibold text-center p-4'>Repairs: {localBookingsService.length + bookingsService.length }</h1>
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
        </div>
    );
}; 
 
 
export default Cart;