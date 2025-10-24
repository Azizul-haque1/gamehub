import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Loader from '../componets/Loader';

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
                navigate(location.state ? location.state : '/')
            })
            .catch(error => {
                showErrorToast(error.code);
            })



    }


    const handleGoogleSignIn = () => {
        signWithGoogle()
            .then(res => {
                console.log(res);
                setUser(res.user)
                navigate('/')
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
                            <div className=" relative"
                            >
                                <label className="label">Password</label>
                                <input name='password' type={show ? 'text' : 'password'} className="input border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:placeholder-neutral-content" placeholder="Password" />
                                <span onClick={() => setShow(!show)} className=' absolute right-[24px] top-[32px] z-10  cursor-pointer '>
                                    {show ? <FaEye /> : < FaEyeSlash />}
                                </span>
                            </div><div><Link to={'/auth/forget-password'} className="link link-hover">Forgot password?</Link></div>
                            <button className="btn btn-neutral mt-4 hover:bg-primary border-transparent">Login</button>
                            <div className="divider my-3">Or</div>

                            {/* Google */}
                            <button onClick={handleGoogleSignIn} type='button' className="btn bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
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