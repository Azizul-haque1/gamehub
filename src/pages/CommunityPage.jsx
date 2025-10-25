import React from 'react';
import Navbar from '../componets/Navbar';
import Footer from '../componets/Footer';
import { motion } from "motion/react"
const CommunityPage = () => {
    return (

        <div className='relative w-full min-h-screen flex flex-col  '>

            <title>Community Page</title>

            <div
                style={{ backgroundImage: "url('https://i.ibb.co.com/hRX57VBX/8764038.jpg')" }}
                className=' w-full inset-0 absolute  bg-cover bg-center object-fit opacity-80   h-full backdrop-blur-md'>

            </div>
            <div className=" relative z-20">
                <div className=" bg-gradient-to-r from-gray-700 via-gray-900 to-black  text-white">
                    <nav className='w-11/12 mx-auto '>
                        <Navbar />

                    </nav>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-center py-40 flex flex-col gap-5  text-white">
                    <h1 className='text-3xl  font-bold  leading-10'>CONNECT WITH GAMES <br /> EVERYWHERE</h1>

                    <p>Join our community o discuss your favorite games <br /> share your content,and find new friends.</p>
                    <div className="">
                        <button className=' px-3 py-1 rounded-full border border-transparent text-white bg-primary hover:border-primary hover:bg-white hover:text-primary' type='button'>Get Started</button>
                    </div>
                </motion.div>
                {/* <Footer /> */}
            </div>

        </div>


    );
};

export default CommunityPage;