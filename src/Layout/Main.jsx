import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import Footer from '../Pages/Shared/Footer/Footer';
import './style.css'
const Main = () => {
    return (
        <div className=' bg-gradient-to-r from-[#f5f5f7] to-[#ebe9f2]'> 
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>


        </div>
    );
};

export default Main;