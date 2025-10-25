import React from 'react';
import { Link } from 'react-router';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';

const NotFoundPage = () => {
    return (
        <div className="">
            <title>Not found</title>
            <Navbar />
            <div className='flex gap-7 items-center flex-col justify-center h-screen'>
                <img className='w-100' src="https://i.ibb.co.com/KjvZXTJ6/404-1.png" alt="" />
                <h1 className='text-2xl text-gray-400'>Opps! Page Not Found</h1>

                <Link to='/' className='mt-3 px-3 py-1 rounded-full border border-transparent text-white bg-primary hover:border-primary hover:bg-white hover:text-primary' type='button'> BACK TO HOME</Link>


            </div>
            <Footer />
        </div>
    );
};

export default NotFoundPage;