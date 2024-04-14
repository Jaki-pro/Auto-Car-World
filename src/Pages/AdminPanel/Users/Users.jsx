
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Profile from '../Profile/Profile';
import pp from '../../../assets/profile.jpg';
const Users = () => {
    const users = useLoaderData();
    console.log(users);
    const [currentUsers, setCurrentUsers] = useState(users);
    const deleteUser = (uid, _id) => {
        fetch(`http://localhost:5000/deleteUser/${uid}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        fetch(`http://localhost:5000/deleteUserFromDB/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(data => {
                const remaining = users.filter(user => user._id != _id);
                setCurrentUsers(remaining);
            })


    }

    return (
        <div className='flex'>
            <Profile></Profile>
            <div className=' w-3/4 px-16 py-4 bg-[#62cdd1]' >
                <h2 className='text-3xl font-bold text-center mb-4 '>Registered Users</h2>
                <div className='grid xl:grid-cols-3 lg:grid-cols-2 gap-4 items-center justify-center'>
                    {
                        currentUsers.map(user => (
                            <div key={user._id} className="card w-64 bg-base-100 shadow-xl">
                                <figure className="px-4 pt-4">
                                    <img src={pp} alt="Shoes" className="rounded-full size-24" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{user.name}</h2>
                                    <p>{user.email}</p>
                                    <div className="card-actions">
                                        <button  onClick={()=>deleteUser(user.uid, user._id)}  className="btn btn-outline btn-error">Delete user</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Users;