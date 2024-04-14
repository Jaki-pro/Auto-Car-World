import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { GiAutoRepair } from "react-icons/gi";
import Stock from '../Stock/Stock';
import { FaCarSide } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Profile from '../Profile/Profile';
import { CiUser } from "react-icons/ci";
import { VscFeedback } from "react-icons/vsc";
const AdminHome = () => {
    const { user, logout, cartCnt, setCartCnt } = useContext(AuthContext);
    return (
        <div className='flex'>
            <Profile></Profile>
            <div className='bg-[#62cdd1] w-full'>
                <div className='lg:p-16 p-4'>
                    <h1 className='text-3xl text-white text-center font-bold'>Admin Dashboard</h1>
                    <div className='grid grid-cols-2 gap-8 lg:px-16 mt-8'> 
                            <Link to='/cars-stock' className="btn btn-success text-lg  h-24"><FaCarSide className='size-8 text-[white]'></FaCarSide>Cars in stock</Link> 
                            <Link to='/services-stock' className="btn btn-success text-lg  h-24"><GiAutoRepair className='size-8 text-[white]'></GiAutoRepair>Services in stock</Link> 
                            <Link to='/cars-orders' className="btn btn-success text-lg  h-24"><FaCartShopping className='size-8 text-[white]'></FaCartShopping>Order List(Cars)</Link>   
                            <Link to='/services-orders' className="btn btn-success text-lg  h-24"><FaCartShopping className='size-8 text-[white]'></FaCartShopping>Order List(services)</Link>   
                            <Link to='/rent-car-list' className="btn btn-success text-lg  h-24"><FaCartShopping className='size-8 text-[white]'></FaCartShopping>Rent Car List</Link> 
                            <Link to='/registered-users' className="btn btn-success text-lg  h-24"><CiUser className='size-8 text-[white]'></CiUser>Registered users</Link> 
                            <Link to='/add-car' className="btn btn-success text-lg  h-24"><FaPlus className='size-8 text-[white]'></FaPlus>Add Car to Stock</Link> 
                            <Link to='/add-service' className="btn btn-success text-lg  h-24"><FaPlus className='size-8 text-[white]'></FaPlus>Add service to Stock</Link> 
                            <Link to='' className="btn btn-success text-lg  h-24"><VscFeedback className='size-8 text-[white]'></VscFeedback>User feedback</Link> 
                        
                        
                    </div>
                    {/**<Stock></Stock> */}

                </div>
            </div>
        </div>
    );
};

export default AdminHome;