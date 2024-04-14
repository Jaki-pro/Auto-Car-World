import React, { useContext } from 'react';
import pp from '../../../assets/profile.jpg';
import { AuthContext } from '../../../Providers/AuthProvider';
const Profile = () => {
    const { user, logout, cartCnt, setCartCnt } = useContext(AuthContext);
    return (
        <div className='lg:w-1/4 md:w-1/3 p-8 bg-[#b759c9] flex justify-center'>
                <div className='justify-center'>

                    <h3 className='text-2xl mb-16 text-center'>Admin Profile</h3>
                    <img className='rounded-full size-16 mx-auto' src={pp} alt="" />
                    <h4 className='text-2xl py-4 text-center text-[white]'>{user?.displayName}</h4>
                    <h4 className='text-xl text-center'>Founder</h4>
                    <h4 className='text-2xl text-center'>Auto Car World</h4>
                </div>
            </div>
    );
};

export default Profile;