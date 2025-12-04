import React from 'react'
import { motion } from "motion/react"

const NewsLetter = () => {
    return (
        <div className="w-full px-0 mx-0 py-16  text-white">

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                className=" mx-auto flex flex-col md:flex-row md:items-center justify-between items-center gap-10 
                   p-8 md:p-12 rounded-3xl backdrop-blur-xl bg-base-100/90 shadow-2xl"
            >

                {/* Image */}
                <div className="flex flex-1 justify-center">
                    <img
                        src="https://i.ibb.co.com/r269QNV2/5fe1c71b84667ab53b9e8015-Message-sent-removebg-preview-1.png"
                        alt="Newsletter"
                        className="w-56 md:w-72 object-contain drop-shadow-xl"
                    />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left space-y-4">

                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                        Subscribe to our <br />
                        <span className="text-primary">GameHub</span> Newsletter
                    </h1>

                    <p className="text-accent text-sm md:text-lg max-w-md">
                        Be the first to receive exclusive game updates, offers, and community news.
                    </p>

                    {/* Input Group */}
                    <div className="join w-full max-w-md mt-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input input-bordered join-item w-full focus:outline-none bg-neutral text-white border-primary placeholder-white"
                        />

                        <button className="btn bg-primary text-white border-none join-item 
                               hover:bg-accent transition-all duration-300">
                            Subscribe
                        </button>
                    </div>

                </div>

            </motion.div>

        </div>
    )
}

export default NewsLetter
