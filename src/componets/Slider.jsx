import React, { use, useEffect, useState } from 'react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import useFetch from '../hooks/useFetch';
import Loader from './Loader';
import { motion } from "motion/react"
import { Link } from 'react-router';



const Slider = () => {
    const { data, loading } = useFetch('/data.json')
    const [activeIndex, setActiveIndex] = useState(0)
    const [newData, setNewData] = useState([])


    useEffect(() => {
        if (data && data.length) {
            const sorted = [...data].sort((a, b) => b.ratings - a.ratings)
            setNewData(sorted)
            console.log(sorted);
        }

    }, [data])


    if (loading) {
        return <Loader />
    }
    return (
        <div className='flex justify-center items-center'>
            <Swiper

                spaceBetween={10}
                effect='fade'
                modules={[Pagination, Autoplay, Navigation]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }}
                slidesPerView={1}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}

            >
                {/* 
                {data?.map((singleData) => <SwiperSlide><img className=' object-cover h-[600px] w-full' src={singleData.coverPhoto} alt="" /></SwiperSlide>
                )} */}

                {newData?.map((singleData, index) =>
                    <SwiperSlide key={index}>
                        {index === activeIndex && (
                            <div className="relative w-full h-[600px]">

                                {/* Image */}
                                <img
                                    className="object-cover h-[600px] w-full"
                                    src={singleData.coverPhoto}
                                    alt={singleData.title}
                                />

                                {/* Dark overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                                {/* Content */}
                                <motion.div
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ ease: 'easeOut', duration: 0.8 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4"
                                >

                                    <h1 className="young-font text-4xl md:text-6xl lg:text-8xl font-extrabold tracking-widest drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
                                        {singleData.title}
                                    </h1>

                                    <p className="mt-4 max-w-2xl text-sm md:text-lg opacity-90">
                                        {singleData.description}
                                    </p>

                                    <Link
                                        to={`/game-details/${singleData.id}`}
                                        className="mt-6 px-6 py-3 rounded-full bg-primary 
                     hover:bg-secondary transition-all duration-300
                     hover:scale-110 shadow-lg"
                                    >
                                        Explore Game
                                    </Link>

                                </motion.div>
                            </div>
                        )}
                    </SwiperSlide>

                )}

            </Swiper>
        </div>
    );
};

export default Slider;