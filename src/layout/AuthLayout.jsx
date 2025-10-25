import React from 'react';
import Navbar from '../componets/Navbar';
import { Outlet } from 'react-router';
import bgImge from '../assets/bg.png'
import Footer from '../componets/Footer';

const AuthLayout = () => {
    return (
        <div className=' relative w-full'>
            <img
                style={{ backgroundImage: "url('https://i.ibb.co.com/hRX57VBX/8764038.jpg')" }}
                className=' w-full  absolute  bg-cover bg-center object-cover opacity-80 h-full backdrop-blur-md'>

            </img>
            <div className=" relative z-20">
                <header className='ackdrop-blur-sm w-full
             bg-gradient-to-r from-gray-700 via-gray-900 to-black shadow-md '>
                    <nav className='myContainer z-10'>
                        <Navbar />
                    </nav>
                </header>

                <main>
                    <Outlet></Outlet>
                </main>
                <Footer />
            </div>
        </div >
    );
};

export default AuthLayout;