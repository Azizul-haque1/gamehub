import React from 'react';
import Navbar from '../componets/Navbar';
import { Outlet } from 'react-router';
import Footer from '../componets/Footer';
import useFetch from '../hooks/useFetch';

const HomeLayout = () => {

    return (
        <div className='w-full relative min-h-screen overflow-hidden'

        >

            <div
                style={{ backgroundImage: "url('https://i.ibb.co.com/hRX57VBX/8764038.jpg')" }}
                className=' w-full  absolute  bg-cover bg-center object-fit opacity-80   h-full backdrop-blur-md'>

            </div>
            <div className=" relative z-20">
                <header className=' ackdrop-blur-sm w-full
             bg-gradient-to-r from-gray-700 via-gray-900 to-black shadow-md'>
                    <nav className='myContainer'>
                        <Navbar />
                    </nav>
                </header>
                <main className=''>
                    <Outlet />
                </main>
                <footer>
                    <Footer></Footer>
                </footer>
            </div>


        </div>
    );
};

export default HomeLayout;