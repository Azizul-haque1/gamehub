import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
    const { user, setUser, signInUserFunc, signOutFunc } = use(AuthContext)
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });
        signInUserFunc(email, password)
            .then(res => {
                console.log(res);
                const currentUser = res.user
                if (!currentUser.emailVerified) {
                    signOutFunc()
                        .then(res => {
                            console.log(res);
                            return toast.warning('verify your account')
                        })
                        .catch(error => {
                            console.log(error);
                        })

                }
                console.log(currentUser);
                setUser(currentUser)
                toast.success('login successful ')
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })



    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-3xl font-bold text-center pt-5 ">Login here</h1>
                    <form onSubmit={handleLogin} className="card-body w-sm">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:placeholder-neutral-content" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:placeholder-neutral-content" placeholder="Password" />
                            <div><Link to={'/auth/forget-password'} className="link link-hover">Forgot password?</Link></div>
                            <button className="btn btn-neutral mt-4 hover:bg-primary border-transparent">Login</button>
                            <p className='pt-2'>Don't have an account?  <Link to='/auth/register' className='text-green-500 hover:underline'>Create here</Link>

                            </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;