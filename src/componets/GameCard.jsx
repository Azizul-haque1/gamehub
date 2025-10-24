import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const GameCard = ({ singleGame }) => {
    const { title, coverPhoto, category, ratings, id } = singleGame



    return (
        <Link to={`/game-details/${id}`} className='bg-base-100 shadow-sm my-10 p-3 rounded-2xl hover:scale-105 hover:animate-pulse  duration-200 ease-in'>
            <div className=" rounded-2xl w-full h-48 ">
                <img className=' rounded-2xl object-cover h-full w-full' src={coverPhoto} alt="" />
            </div>
            <div className="my-2">
                <h1 className='text-secondary'>{title}</h1>

                <div className=" flex  space-x-3.5 items-center">
                    <p className='text-gray-500'> {category}</p>
                    <span className='flex gap-2 items-center'> <span> <FaStar /></span> {ratings}</span>
                </div>
            </div>


        </Link>
    );
};

export default GameCard;