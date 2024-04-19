
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
const Check = () => {
    const users = useLoaderData();
    console.log(users);
    const [currentUsers, setCurrentUsers] = useState(users);
    const deleteUser=(uid, _id) =>{
        // Delete user from Firebase
        fetch(`https://auto-car-world-server-jaki-pro-jakaria-hossains-projects.vercel.app/deleteUser/${uid}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // Delete user from Database
        fetch(`https://auto-car-world-server-jaki-pro-jakaria-hossains-projects.vercel.app/deleteUserFromDB/${_id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(data => {
            const remaining = users.filter(user =>user._id!=_id);
            setCurrentUsers(remaining);
        })

             
    }

    return (
        <div>
            {
                currentUsers.map(user => (
                    <div key={user._id} className='border-4 border-indigo-500/50 m-4 p-4 w-1/3 flex justify-between rounded-lg'>
                        <div>
                            <p>{user.email}</p>
                            <h1 className='text-3xl'>{user.name}</h1>
                        </div>
                        <button  onClick={()=>deleteUser(user.uid, user._id)}  className='btn btn-error'>Delete</button>
                    </div>
                ))
            }
        </div>
    );
};

export default Check;