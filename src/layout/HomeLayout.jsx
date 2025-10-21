import React from 'react';
import Navbar from '../componets/Navbar';
import { Outlet } from 'react-router';
import Footer from '../componets/Footer';
import bgImge from '../assets/bg.png'
const HomeLayout = () => {
    return (
        <div className='h-screen ' style={{ backgroundImage: `url('${bgImge}')` }}>
            <header className=' rounded-lg bg-white/10 backdrop-blur-lg '>
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