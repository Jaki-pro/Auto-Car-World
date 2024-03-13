import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { FaAlignLeft } from "react-icons/fa";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { AuthContext } from '../../../Providers/AuthProvider';
const NavBar = () => {
    const { user, logout } = useContext(AuthContext);
    const [cartValue, setCartValue] = useState(0);
    const handleLogout = () => {
        logout();
    }
    const handleSetCartValue = (value) => {
        setCartValue(value);
    }
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Services</Link></li>
        <li>
            <details className="dropdown">
                <summary className="m-1">Shop</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 grid grid-cols1-1 gap-y-2">
                    <li><Link to='/new-cars'>New Car</Link></li>
                    <li><Link>Old Car</Link></li>
                    <li><Link to='repairs'>Car Repair</Link></li>
                </ul>
            </details>
        </li>
        <li><Link to='/'>Sell a Car</Link></li>
        <li><Link to='/'>Contact</Link></li>
        <li><Link to='/'>About Us</Link></li>
        {
            user ?
                <li><Link onClick={handleLogout} to='/'>Logout</Link></li> :
                <li><Link to='/login'>Sign in</Link></li>
        }
          
            
         
        <li><Link className='relative' to='/bookings'><FaCartShopping className='size-6' /><div className="absolute left-9 bottom-4 badge badge-secondary">{2 }</div></Link></li>

    </>
    return (
        <div>

            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex space-x-12">
                        {navItems}
                        {/* Drawer */}
                        <li>
                            <div className="drawer drawer-end">
                                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content">
                                    {/* Page content here */}
                                    <label htmlFor="my-drawer" className="btn drawer-button"><FaAlignLeft /></label>
                                </div>
                                <div className="drawer-side z-50">
                                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                    <div className="menu p-4 min-h-full bg-base-200 text-base-content">
                                        {/* Sidebar content here */}
                                        <div className="card w-96 bg-[#2c302d] text-white">
                                            <div className="card-body">
                                                <h1 className="text-3xl">Car Duniya</h1>
                                                <p>We believe brand interaction is key in commu- nication. Real innovations and a positive customer experience are the heart of successful communication.</p>
                                                <h1 className='text-3xl'>Work Hour</h1>
                                                <p>Monday to Friday</p>
                                                <p>7:00 am to 9:00 pm</p>
                                                <p>Saturday</p>
                                                <p>10:00 am to 7:00 pm</p>
                                                <h3 className='text-3xl' >Contact</h3>
                                                <p>Support: 01627212523</p>
                                                <p>Showroom: Banani 232/Ck Road</p>
                                                <div className='flex justify-start'>
                                                    <div className='mx-2'>__Follow Us: </div>
                                                    <div>
                                                        <div className='flex space-x-6'>
                                                            <div><CiFacebook className='size-6' /></div>
                                                            <div><CiInstagram className='size-6' /></div>
                                                            <div><CiTwitter className='size-6' /></div>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default NavBar;