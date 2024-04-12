import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../Providers/AuthProvider';
import car from '.././../assets/featured-vehicle/car5.png'

const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const newUser = { name, email, password };
        createUser(email, password)
            .then(res => {
                const user = res.user;
                //console.log(user);
                updateProfile(user, {
                    displayName: name,
                })
                    .then(res => {
                        const userPost = {
                            name: user.displayName,
                            email: user.email,
                            uid: user.uid,
                            accessToken: user.accessToken
                        }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userPost)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                            })
                    })


                // Post user to database



                navigate('/', { replace: true });
            })
            .catch(e => console.log(e))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-[90%] flex-col lg:flex-row">
                <div className=" lg:text-left  lg:mr-32 ">
                    <h1 className="text-center text-4xl font-bold text-warning">Sign Up</h1>
                    <h1 className="text-5xl font-bold mb-8 py-1">Auto Car World!</h1>
                    <img className='w-96' src={car} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="SignUp" />
                        </div>
                    </form>
                    <p className='p-8'>Already Have an Account? <Link className='text-orange-500' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;