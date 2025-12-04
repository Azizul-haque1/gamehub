import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { motion } from "motion/react"

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
        <div className="hero min-h-screen bg-secondary px-4 py-10">
            <title>Create Account</title>

            <div className=" w-full max-w-6xl flex-col lg:flex-row-reverse gap-10">
                <div className="hidden lg:block w-1/2"></div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="card 
                 w-full 
                 max-w-md 
                 sm:max-w-lg 
                 md:max-w-xl
                 lg:max-w-md
                 mx-auto
                 bg-base-100/95
                 border border-primary/30
                 shadow-2xl
                 text-white"
                >
                    <h1 className="text-3xl font-bold text-center pt-6 text-primary">
                        Create an Account
                    </h1>

                    <form onSubmit={handleRegister} className="card-body w-full space-y-3">

                        {/* Name */}
                        <label className="label text-accent">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="input w-full bg-secondary text-white border border-primary/40 
                     focus:outline-none focus:ring-2 focus:ring-accent"
                            placeholder="Name"
                        />

                        {/* Photo URL */}
                        <label className="label text-accent">Photo URL</label>
                        <input
                            name="photo"
                            type="text"
                            className="input w-full bg-secondary text-white border border-primary/40 
                     focus:outline-none focus:ring-2 focus:ring-accent"
                            placeholder="Photo URL here"
                        />

                        {/* Email */}
                        <label className="label text-accent">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input w-full bg-secondary text-white border border-primary/40 
                     focus:outline-none focus:ring-2 focus:ring-accent"
                            placeholder="Email"
                        />

                        {/* Password */}
                        <div className="relative">
                            <label className="label text-accent">Password</label>
                            <input
                                name="password"
                                type={show ? "text" : "password"}
                                className="input w-full bg-secondary text-white border border-primary/40 
                       focus:outline-none focus:ring-2 focus:ring-accent"
                                placeholder="Password"
                            />
                            <span
                                onClick={() => setShow(!show)}
                                className="absolute right-3 top-[38px] z-10 cursor-pointer text-accent"
                            >
                                {show ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>

                        <button
                            type="submit"
                            className="btn w-full mt-4 bg-primary border-transparent text-white 
                     hover:bg-accent hover:text-neutral"
                        >
                            Create Account
                        </button>

                        <p className="pt-3 text-center text-sm text-gray-400">
                            Already have an account?
                            <Link
                                to="/auth/login"
                                className="text-primary font-bold hover:underline ml-1"
                            >
                                Login
                            </Link>
                        </p>
                    </form>
                </motion.div>
            </div>
        </div>

    );
};

export default Register;