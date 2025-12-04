import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import Loader from './Loader'
import { motion } from "motion/react"
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router'

const PopularGames = () => {
    const { loading, data } = useFetch('/allData.json')
    const [newData, setNewData] = useState([])

    useEffect(() => {
        if (data && data.length) {
            const sorted = [...data].sort((a, b) => b.ratings - a.ratings)
            // const sorted = [...data].sort((a, b) => a.ratings - b.ratings)
            setNewData(sorted.slice(0, 8))
            // setNewData(data)
        }
    }, [data])

    if (loading) return <Loader />

    return (
        <div className='py-16'>

            {/* Section Header */}
            <div className="text-center mb-12">
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-3'>
                    Popular Games
                </h1>
                <p className='text-accent text-sm md:text-base'>
                    Discover the top-rated and most played games
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Game Cards Grid */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
                {newData.map((game) => (
                    <motion.div
                        key={game.id}
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="relative bg-base-100/80 backdrop-blur-lg rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                    >
                        {/* Game Image */}
                        <div className="overflow-hidden rounded-t-3xl">
                            <img
                                src={game.coverPhoto}
                                alt={game.title}
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Card Content */}
                        <div className="p-6 flex flex-col gap-3">
                            <h2 className="text-xl md:text-2xl font-bold text-primary truncate">
                                {game.title}
                            </h2>

                            <p className="text-gray-300 text-sm md:text-base truncate">
                                {game.description}
                            </p>

                            <div className="flex items-center justify-between mt-3">
                                <span className="flex items-center gap-1 text-yellow-400 font-semibold">
                                    <FaStar /> {game.ratings}
                                </span>
                                <span className="px-2 py-1 bg-accent/20 text-accent rounded-full text-xs">
                                    {game.genre}
                                </span>
                            </div>

                            <Link to={`/game-details/${game.id}`}


                                className="mt-4 inline-block text-center bg-primary hover:bg-accent text-white px-5 py-2 rounded-full font-semibold transition-colors duration-300"
                            >
                                See More
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default PopularGames
