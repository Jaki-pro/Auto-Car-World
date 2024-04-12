import React, { useContext } from 'react';
import profile from '../../../assets/profile.jpg';
import { AuthContext } from '../../../Providers/AuthProvider';
const Profile = () => {
    const { user, logout, cartCnt, setCartCnt } = useContext(AuthContext);
    return (
        <div className='lg:w-1/4 md:w-1/3 p-8 bg-[#72fcab] flex justify-center'>
                <div className='justify-center'>

                    <h3 className='text-3xl mb-16 text-center'>Admin Profile</h3>
                    <img className='rounded-full size-24 mx-auto' src={profile} alt="" />
                    <h4 className='text-2xl py-4 text-center'>{user?.displayName}</h4>
                    <h4 className='text-2xl text-center'>Founder</h4>
                    <h4 className='text-2xl text-center'>Auto Car World</h4>
                </div>
            </div>
    );
};

export default Profile;