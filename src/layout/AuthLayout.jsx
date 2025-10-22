import React from 'react';
import Navbar from '../componets/Navbar';
import { Outlet } from 'react-router';
import bgImge from '../assets/bg.png'

const AuthLayout = () => {
    return (
        <div className='h-screen'>
            <header className='  bg-white/10 backdrop-blur-lg '>
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