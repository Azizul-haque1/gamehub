import React, { use, useRef } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

const ForgetPassword = () => {
    const { sendPasswordResetEmailFunc, user } = use(AuthContext)
    const emailRef = useRef()

    const handleForgetPass = (e) => {
        e.preventDefault()
        const email = emailRef.current.value;
        sendPasswordResetEmailFunc(email)
            .then(() => {
                toast.success('Reset link sent to your email')
                window.open("https://mail.google.com", "_blank");

            })
            .catch(error => {
                console.log(error);
            })





    }
    return (
        <div className="hero  min-h-screen">
            <title>Forget Password</title>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <title>Forget Passwod</title>

                </div>

                <div className="card bg-white/20 w-full max-w-sm shrink-0 shadow-2xl py-10">
                    <h1 className="text-3xl font-bold text-center pt-5 ">Forget here</h1>
                    <form onSubmit={handleForgetPass} className="card-body  min-w-xs">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input ref={emailRef} type="email" className="input border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:placeholder-neutral-content" placeholder="Email" />

                            <button className="btn btn-neutral mt-4 hover:bg-primary border-transparent">Forget Now</button>

                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;