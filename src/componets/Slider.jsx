import React, { use } from 'react';
import { Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import useFetch from '../hooks/useFetch';
import Loader from './Loader';



const Slider = () => {

    const { data, loading } = useFetch('/data.json')
    console.log(data);

    if (loading) {
        return <Loader />
    }
    return (
        <div className='flex justify-center items-center'>
            <Swiper

                spaceBetween={10}
                height
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >

                {data?.map((singleData) => <SwiperSlide><img className=' object-cover h-[600px] w-full' src={singleData.coverPhoto} alt="" /></SwiperSlide>
                )}
                <SwiperSlide><img className=' object-cover h-[600px] w-full' src="https://i.ibb.co.com/cSQdg7tf/mango-min.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className=' object-cover h-[600px] w-full' src="https://i.ibb.co.com/xt98PwZq/jackfruit-min.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className=' object-cover h-[600px] w-full' src="https://i.ibb.co.com/qY8qS7YN/champa-min.jpg" alt="" /></SwiperSlide>
                {/* <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide> */}
                ...
            </Swiper>
        </div>
    );
};

export default Slider;