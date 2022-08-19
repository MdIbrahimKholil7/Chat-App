import React from 'react';
import { FaBeer } from 'react-icons/fa';
import logo from '../../assets/logo.png'
const SignUp = () => {
    return (
        <div>
            <div className='w-full h-screen'>

                <div className='text-center'>
                    <img className='w-[180px] mx-auto pt-20' src={logo} alt="logo" />
                </div>
                <div className='pt-10'>
                    <h1 className='text-2xl font-bold'>Sign up</h1>
                    <p className='text-xl leading-9'>Get your Chatvia account now.</p>
                </div>
                <div className='flex justify-center items-center h-full mt-[-160px]'>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="Password" class="input input-bordered" />
                                <label class="label">
                                    <a>Forgot password?</a>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;