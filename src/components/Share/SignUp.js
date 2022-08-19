import React from 'react';
import { FaBeer } from 'react-icons/fa';
import logo from '../../assets/logo.png'
import axios from 'axios'
const SignUp = () => {

    const handleSubmit=async e=>{
        e.preventDefault()
        const {name,email,password}=e.target
        
        const {data}=await axios.post(`http://localhost:5000/chat/api/signup`,{name:name.value,email:email.value})
        console.log(data)
    }
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
                            <form onSubmit={handleSubmit}>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" name='name' class="input input-bordered" required />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="Email" name='email' class="input input-bordered" required />
                                </div>
                                <div class="form-control">
                                    <label class="label">
                                        <span class="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="Password" name='password' class="input input-bordered" required />
                                    <label class="label">
                                        <a>Forgot password?</a>
                                    </label>
                                </div>
                                <div class="form-control mt-6">
                                    <button type='submit' class="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;