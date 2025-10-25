import React from 'react';
import Navbar from '../componets/Navbar';
import { Outlet } from 'react-router';
import bgImge from '../assets/bg.png'

const AuthLayout = () => {
    return (
        <div className='h-screen'>
            <div
                style={{ backgroundImage: "url('https://i.ibb.co.com/hRX57VBX/8764038.jpg')" }}
                className=' w-full  absolute  bg-cover bg-center object-fit opacity-80   h-full backdrop-blur-md'>

            </div>
            <header className=' fixed w-full
             bg-gradient-to-r from-gray-700 via-gray-900 to-black  top-0 h-fit overflow-hidden z-20 '>
                <nav className='myContainer'>
                    <Navbar />
                </nav>
            </header>

            <main>
                <Outlet></Outlet>
            </main>
        </div >
    );
};

export default AuthLayout;