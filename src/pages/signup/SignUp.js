import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import signup from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider/AuthContext';

const SignUP = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="hero w-full bg-base-200 my-20 ">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left  mx-5">
                    <img src={signup} alt="login" />
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-5xl font-bold text-center">Sign Up now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value='Sign Up' />
                            <p className='py-5'>Already have an account? <Link to='/login' className='text-orange-600 font-semibold'>LogIn</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUP;