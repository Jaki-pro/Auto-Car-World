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
                loader: ({params}) => fetch(`http://localhost:5000/carDetails/${params.id}`)
            },
            {
                path: "serviceDetails/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/serviceDetails/${params.id}`)
            },
            {
                path: "order-request/:id",
                element: <OrderRequest></OrderRequest>,
                loader: ({params}) => fetch(`http://localhost:5000/carDetails/${params.id}`)
            },
            {
                path: "order-request-service/:id",
                element: <OrderRequestService></OrderRequestService>,
                loader: ({params}) => fetch(`http://localhost:5000/serviceDetails/${params.id}`)
            },
            {
                path:'sign-up',
                element: <Signup></Signup>
            },
            {
                path:'login',
                element: <Login></Login>
            },
            {
                path:'bookings',
                element: <PrivateRoute><Cart></Cart></PrivateRoute> 
            },
            {
                path:'new-cars',
                element: <NewCars></NewCars>,
                loader: () => fetch(`http://localhost:5000/cars`)
            },
            {
                path:'repairs',
                element: <Repairs></Repairs>,
                loader: () => fetch(`http://localhost:5000/repairs`)
            },
            {
                path:'sell-car',
                element: <SellCar></SellCar>
            },
            {
                path:'old-cars',
                element: <OldCars></OldCars>,
                loader: () => fetch(`http://localhost:5000/old-cars`)
            }
        ],
    }
]);
export default router;