import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Loader from '../componets/Loader';
import { motion } from "motion/react"
const Login = () => {

    const [show, setShow] = useState(false)
    const location = useLocation()

    const { user, signWithGoogle, setUser, signInUserFunc, signOutFunc, loading, setLoading } = use(AuthContext)

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
                            setLoading(false)
                            console.log(res);
                            toast.warning('verify your account')
                            return

                        })
                        .catch(error => {
                            console.log(error);
                        })

                }
                console.log(currentUser);
                setUser(currentUser)
                toast.success('login successful ')
                navigate(location.state ? location.state : '/')
            })
            .catch(error => {
                setLoading(false)
                showErrorToast(error.code);
            })



    }


    const handleGoogleSignIn = () => {
        signWithGoogle()
            .then(res => {
                console.log(res);
                setUser(res.user)
                navigate(location.state ? location.state : '/')
                toast.success('Login Successfull')
            }
            )
            .catch(error => {
                console.log(error);
            })

    }


    if (loading) {
        return <Loader />
    }
    const showErrorToast = (code) => {
        switch (code) {
            case "auth/invalid-email":
                toast.error("Invalid email address.");
                break;
            case "auth/user-disabled":
                toast.error("This account has been disabled.");
                break;
            case "auth/user-not-found":
                toast.error("No account found with this email.");
                break;
            case "auth/wrong-password":
                toast.error("Incorrect password.");
                break;
            case "auth/too-many-requests":
                toast.error("Too many failed attempts. Try again later.");
                break;
            case "auth/network-request-failed":
                toast.error("Network error. Check your connection.");
                break;
            case "auth/invalid-credential":
                toast.error("Invalid login credentials.");
                break;
            case "auth/operation-not-allowed":
                toast.error("Email/password login not enabled.");
                break;
            case "auth/internal-error":
                toast.error("Internal error. Try again later.");
                break;
            default:
                toast.error("Something went wrong. Please try again.");
        }

    };


    return (
        <div className="">
            <div className="hero min-h-screen bg-secondary px-4">
                <title>login</title>

                <div className=" w-full max-w-6xl   gap-8">

                    {/* Right side placeholder (optional image/text later) */}
                    <div className="hidden  lg:block w-1/2 mx-auto"></div>

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
                       bg-base-100/90 
                       border border-primary/30 
                       shadow-2xl 
                       text-white"
                    >
                        <h1 className="text-3xl font-bold text-center pt-6 text-primary">
                            Login here
                        </h1>

                        <form onSubmit={handleLogin} className="card-body w-full space-y-3">

                            <label className="label text-accent">Email</label>
                            <input
                                name="email"
                                type="email"
                                className="input w-full bg-secondary text-white border border-primary/40 placeholder-gray-400
                               focus:outline-none focus:ring-2 focus:ring-accent"
                                placeholder="Email"
                            />

                            <div className="relative">
                                <label className="label text-accent">Password</label>
                                <input
                                    name="password"
                                    type={show ? 'text' : 'password'}
                                    className="input w-full bg-secondary text-white border border-primary/40 placeholder-gray-400
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

                            <div>
                                <Link
                                    to="/auth/forget-password"
                                    className="link link-hover text-accent text-sm"
                                >
                                    Forgot password?
                                </Link>
                            </div>

                            <button
                                type="submit"
                                className="btn w-full mt-3 bg-primary border-transparent text-white hover:bg-accent hover:text-neutral"
                            >
                                Login
                            </button>

                            <div className="divider text-gray-400 my-4">Or</div>

                            <button
                                onClick={handleGoogleSignIn}
                                type="button"
                                className="btn w-full bg-secondary text-white border border-accent/40 
                               hover:bg-accent hover:text-neutral"
                            >
                                Login with Google
                            </button>

                            <p className="pt-3 text-gray-400 text-center text-sm">
                                Don't have an account?
                                <Link
                                    to="/auth/register"
                                    className="text-primary font-bold hover:underline ml-1"
                                >
                                    Create here
                                </Link>
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>

        </div>

    );
};

export default Login;