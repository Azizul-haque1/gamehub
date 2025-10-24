import React from 'react';
import Navbar from '../componets/Navbar';
import { Outlet } from 'react-router';
import Footer from '../componets/Footer';

const HomeLayout = () => {
    return (
        <div className='h-screen  '

        >
            <header className='sticky bg-white/50 top-0 h-fit overflow-hidden z-20  '>
                <nav className='myContainer'>
                    <Navbar />
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer></Footer>
            </footer>


        </div>
    );
};

export default HomeLayout;