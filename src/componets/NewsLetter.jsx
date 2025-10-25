import React from 'react';
import { motion } from "motion/react"

const NewsLetter = () => {
    return (
        <div className=" flex flex-col items-center justify-center py-10 px-20 bg-[#F9F8F5]">

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}


                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
                className="flex items-center justify-center">
                <img src="https://i.ibb.co.com/r269QNV2/5fe1c71b84667ab53b9e8015-Message-sent-removebg-preview-1.png" alt="" />

                <div className="flex flex-col space-y-2 flex-1">
                    <h1 className='text-4xl font-bold'>Subscribe to our <br />
                        Newsletter!</h1>
                    <p className='mt-2 text-gray-500'>Be the first to get exclusive offers
                        ands the latest news</p>
                    <div className="join w-full mx-auto ">
                        <input className="input w-1/2 join-item" placeholder="Enter your email address" />
                        <button className="btn bg-primary border-none text-white join-item rounded-r-full">Subscribe</button>
                    </div>
                </div>
            </motion.div>
        </div >
    );
};

export default NewsLetter;