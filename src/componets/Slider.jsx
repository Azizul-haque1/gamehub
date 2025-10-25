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
                            <div

                                className=' relative '>

                                <img className=' object-cover h-[600px] w-full' src={singleData.coverPhoto} alt="" />
                                <motion.div
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ ease: 'easeOut', duration: 0.8 }}

                                    className="  flex text-white flex-col w-full justify-center bottom-1/9 absolute">
                                    <h1 className=' young-font 
                              text-9xl font-bold text-center tracking-wide'>{singleData.title}</h1>
                                    <div className="flex flex-col items-center justify-center">

                                        <p className='mt-2 text-xl nunito-sans w-1/3 tracking-wide  items-center text-center'>{singleData.description}</p>
                                        <Link to={`/game-details/${singleData.id}`} className='bg-primary mt-4 rounded-lg px-4 py-2'>Explore</Link>
                                    </div>
                                </motion.div>
                            </div>
                        )}


                        {/* <img className=' object-cover h-[600px] w-full' src={singleData.coverPhoto} alt="" /> */}


                    </SwiperSlide>
                )}

            </Swiper>
        </div>
    );
};

export default Slider;