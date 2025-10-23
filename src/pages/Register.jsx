import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const [show, setShow] = useState(false)
    const { createUserFunc,
        setUser,
        signOutFunc,
        updateProfileFunc,
        sendEmailVerificationFunc,

    } = use(AuthContext)

    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const displayName = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;


        if (!displayName) {
            return toast.error("Please enter your name.");
        }
        if (!email) {
            return toast.error("Please enter your email.");
        }


        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;

        if (password.length < 6) {
            return toast.error("Password must be at least 6 characters long.");
        }
        if (!uppercaseRegex.test(password)) {
            return toast.error("Password must contain at least one uppercase letter.");
        }
        if (!lowercaseRegex.test(password)) {
            return toast.error("Password must contain at least one lowercase letter.");
        }

        createUserFunc(email, password)
            .then(res => {
                const currentUser = res.user
                // console.log(user);
                updateProfileFunc(displayName, photoURL)
                    .then(() => {
                        sendEmailVerificationFunc()
                            .then(() => {
                                toast.success("Clicking on the verification link within the email.")
                                signOutFunc()
                                navigate('/auth/login')

                            })
                            .catch(er => console.log(er))

                    })
                    .catch(error => {
                        console.log(error);
                    })

                setUser(currentUser)

            })
            .catch(error => {
                handleAuthError(error);
            })

    }

    const handleAuthError = (error) => {
        switch (error.code) {
            case "auth/email-already-in-use":
                toast.error("This email is already in use.");
                break;
            case "auth/invalid-email":
                toast.error("Please enter a valid email address.");
                break;
            case "auth/operation-not-allowed":
                toast.error("Email/password sign-up is disabled.");
                break;
            case "auth/weak-password":
                toast.error("Password should be at least 6 characters.");
                break;
            case "auth/missing-email":
                toast.error("Please enter your email.");
                break;
            case "auth/missing-password":
                toast.error("Please enter your password.");
                break;
            case "auth/network-request-failed":
                toast.error("Network error. Check your connection.");
                break;
            case "auth/too-many-requests":
                toast.error("Too many attempts. Try again later.");
                break;
            case "auth/internal-error":
                toast.error("Something went wrong. Try again.");
                break;
            default:
                toast.error("An unknown error occurred.");
        }
    };
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
                            <input name='name' type="text" className="input border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent " placeholder="Name" />
                            <label className="label">Photo Url</label>
                            <input name='photo' type="text" className="input border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:placeholder-neutral-content" placeholder="Photo url here" />
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:placeholder-neutral-content" placeholder="Email" />
                            <div className=" relative"
                            >
                                <label className="label">Password</label>
                                <input name='password' type={show ? 'text' : 'password'} className="input border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:placeholder-neutral-content" placeholder="Password" />
                                <span onClick={() => setShow(!show)} className=' absolute right-[24px] top-[32px] z-10 '>
                                    {show ? <FaEye /> : < FaEyeSlash />}
                                </span>
                            </div>
                            <button className="btn btn-neutral mt-4 hover:bg-primary border-transparent">Create Account</button>
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