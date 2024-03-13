import React, { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import car from '../../assets/featured-vehicle/car6.png'
const Login = () => {
    const navigate = useNavigate();
    const { signIn } = useContext(AuthContext);
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const newUser = { name, email, password };
        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                navigate('/', {replace:true})
            })
            .catch(e => console.log(e))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="w-[90%] hero-content flex-col lg:flex-row">
                <div className=" lg:text-left  lg:mr-32 ">
                    <h1 className="text-center text-4xl font-bold text-warning">Login</h1>
                    <h1 className="text-5xl font-bold mb-8 py-1">Auto Car World!</h1>
                    <img className='w-96' src={car} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
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
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='p-8'>New to Car Doctor? <Link className='text-orange-500' to='/sign-up'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;