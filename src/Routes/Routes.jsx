import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import CarDetails from '../Pages/Details/CarDetails/CarDetails';
import OrderRequest from '../Pages/Details/OrderRequest/OrderRequest';
import Signup from '../Pages/SignUp/SignUp';
import Login from '../Pages/Login/Login';
import Cart from '../Pages/Details/Cart/Cart';
import PrivateRoute from './PrivateRoute';
import NewCars from '../Pages/NewCars/NewCars';
import Repairs from '../Pages/Repairs/Repairs';
import ServiceDetails from '../Pages/Details/ServiceDetails/ServiceDetails';
import OrderRequestService from '../Pages/Details/OrderRequestService/OrderRequestService';
import SellCar from '../Pages/SellCar/SellCar';
import OldCars from '../Pages/OldCars/OldCars';
import Check from '../Pages/AdminPanel/Check';
import AdminHome from '../Pages/AdminPanel/AdminHome/AdminHome';
import CarStock from '../Pages/AdminPanel/CarStock/CarStock';
import ServiceStock from '../Pages/AdminPanel/ServiceStock/ServiceStock';
import CarsOrders from '../Pages/AdminPanel/CarsOrders/CarsOrders';
import ServicesOrders from '../Pages/AdminPanel/ServicesOrders/ServicesOrders';
import AddCar from '../Pages/AdminPanel/AddCar/AddCar';  
import AddServices from '../Pages/AdminPanel/AddServices/AddServices';
import Users from '../Pages/AdminPanel/Users/Users';
import RentCar from '../Pages/Details/RentCar/RentCar';
import RentCarList from '../Pages/AdminPanel/RentCarList/RentCarList';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "carDetails/:id",
                element: <CarDetails></CarDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/carDetails/${params.id}`)
            },
            {
                path: "serviceDetails/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/serviceDetails/${params.id}`)
            },
            {
                path: "order-request/:id",
                element: <OrderRequest></OrderRequest>,
                loader: ({ params }) => fetch(`http://localhost:5000/carDetails/${params.id}`)
            },
            {
                path: "order-request-service/:id",
                element: <OrderRequestService></OrderRequestService>,
                loader: ({ params }) => fetch(`http://localhost:5000/serviceDetails/${params.id}`)
            },
            {
                path: 'sign-up',
                element: <Signup></Signup>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'bookings',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },
            {
                path: 'new-cars',
                element: <NewCars></NewCars>,
                loader: () => fetch(`http://localhost:5000/cars`)
            },
            {
                path: 'repairs',
                element: <Repairs></Repairs>,
                loader: () => fetch(`http://localhost:5000/repairs`)
            },
            {
                path: 'sell-car',
                element: <SellCar></SellCar>
            },
            {
                path: 'old-cars',
                element: <OldCars></OldCars>,
                loader: () => fetch(`http://localhost:5000/old-cars`)
                
            },
            {
                path: 'contact',
                element: <p>Under Development</p>,
            },
            {
                path: 'admin-panel',
                element: <AdminHome></AdminHome>,

            },
            {
                path: 'cars-stock',
                element: <CarStock></CarStock>
            },
            {
                path: 'services-stock',
                element: <ServiceStock></ServiceStock>
            },
            {
                path: 'cars-orders',
                element: <CarsOrders></CarsOrders>
            },
            {
                path: 'services-orders',
                element: <ServicesOrders></ServicesOrders>
            },
            {
                path: 'add-car',
                element: <AddCar></AddCar>
            },
            {
                path: 'add-service', 
                element:<AddServices></AddServices>
            },
            {
                path: 'registered-users', 
                element:<Users></Users>,
                loader: () => fetch(`http://localhost:5000/users`)
            },
            {
                path: 'rent-car/:id', 
                element:<RentCar></RentCar>,
                loader: ({ params }) => fetch(`http://localhost:5000/carDetails/${params.id}`)
            },
            {
                path: 'rent-car-list', 
                element:<RentCarList></RentCarList>,
                loader: ({ params }) => fetch(`http://localhost:5000/rent-car`)
            }

        ],
    }
]);
export default router;