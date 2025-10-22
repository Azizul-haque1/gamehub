import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUserFunc,
        setUser,
        signOutFunc,
        updateProfileFunc,
        sendEmailVerificationFunc,

    } = use(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const displayName = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUserFunc(email, password)
            .then(res => {
                const user = res.user
                // console.log(user);
                updateProfileFunc(displayName, photoURL)
                    .then(() => {
                        sendEmailVerificationFunc()
                            .then(() => {
                                toast.success("Clicking on the verification link within the email.")
                                signOutFunc()
                            })
                            .catch(er => console.log(er))

                    })
                    .catch(error => {
                        console.log(error);
                    })

                // setUser(user)

            })
            .catch(error => {
                console.log(error.message);
            })





    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                </div>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-3xl font-bold text-center pt-5 ">Create an Account
                    </h1>
                    <form onSubmit={handleRegister} className="card-body w-sm">
                        <fieldset className="fieldset">
                            {/* Name */}
                            <label className="label">Name</label>
                            <input name='name' type="text" className="input" placeholder="Name" />
                            <label className="label">Photo Url</label>
                            <input name='photo' type="text" className="input" placeholder="Photo url here" />
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                            <p className='pt-2'>Already have an account? <Link to='/auth/login' className='text-green-500 hover:underline'>Login</Link>

                            </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;