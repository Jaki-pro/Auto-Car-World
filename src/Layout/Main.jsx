import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import Footer from '../Pages/Shared/Footer/Footer';
import './style.css'
import PrivateRoute from '../Routes/PrivateRoute';
const Main = () => {
    return (
        <div className=' bg-gradient-to-r from-[#d0f7dc] to-[#dfdefc]'> 
             
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>


        </div>
    );
};

export default Main;