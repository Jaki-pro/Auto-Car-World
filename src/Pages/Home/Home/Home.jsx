import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import Welcome from '../Welcome/Welcome';
import FeaturedVehicle from '../FeaturedVehicle/FeaturedVehicle';
import SalesTeam from '../SalesTeam/SalesTeam';
import Feedback from '../Feedback/Feedback'; 
import ServicesWeOffer from '../ServicesWeOffer/ServicesWeOffer'; 
import LookingCar from '../LookingCar/LookingCar';
import { AuthContext } from '../../../Providers/AuthProvider';
import Temp from '../Temp/Temp';
import PrivateRoute from '../../../Routes/PrivateRoute';


const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Welcome></Welcome>
            <FeaturedVehicle></FeaturedVehicle>
            <ServicesWeOffer></ServicesWeOffer>
            <LookingCar></LookingCar>
            <SalesTeam></SalesTeam>
            <Feedback></Feedback> 
            <PrivateRoute><Temp></Temp></PrivateRoute>
        </div>
    );
};

export default Home;