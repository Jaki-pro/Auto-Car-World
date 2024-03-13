import React from 'react';
import Banner from '../Banner/Banner';
import Welcome from '../Welcome/Welcome';
import FeaturedVehicle from '../FeaturedVehicle/FeaturedVehicle';
import SalesTeam from '../SalesTeam/SalesTeam';
import Feedback from '../Feedback/Feedback'; 
import ServicesWeOffer from '../ServicesWeOffer/ServicesWeOffer'; 
import LookingCar from '../LookingCar/LookingCar';


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
        </div>
    );
};

export default Home;