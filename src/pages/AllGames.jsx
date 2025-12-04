import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import Loader from '../componets/Loader';
import { motion } from "motion/react";
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const AllGames = () => {
    const { loading, data } = useFetch('/allData.json');
    const [games, setGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('ratings'); // default sort

    useEffect(() => {
        if (data && data.length) {
            setGames(data);
            setFilteredGames(data);
        }
    }, [data]);

    useEffect(() => {
        let updatedGames = [...games];

        // Search filter
        if (searchTerm) {
            updatedGames = updatedGames.filter(game =>
                game.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Sort games
        if (sortBy === 'ratings') {
            updatedGames.sort((a, b) => b.ratings - a.ratings);
        } else if (sortBy === 'title') {
            updatedGames.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortBy === 'newest') {
            updatedGames.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        }

        setFilteredGames(updatedGames);
    }, [searchTerm, sortBy, games]);

    if (loading) return <Loader />;

    return (
        <div className='w-10/12 mx-auto py-16'>

            {/* Section Header */}
            <div className="text-center mb-8">
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-3'>
                    Explore All Games

                </h1>
                <p className='text-accent text-sm md:text-base'>
                    Browse through our extensive library of games and find your next adventure

                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Search & Sort */}
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 mb-8">
                <input
                    type="text"
                    placeholder="Search games..."
                    className="input w-full md:w-1/2 bg-base-100 text-white border-primary focus:ring-primary"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div>
                    <label className="text-accent font-semibold mr-2">Sort by:</label>
                    <select
                        className="select select-bordered bg-base-100 text-white border-primary focus:ring-primary"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="ratings">Ratings</option>
                        <option value="title">Title</option>
                        <option value="newest">Newest</option>
                    </select>
                </div>
            </div>

            {/* Game Cards Grid */}
            <motion.div
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
                {filteredGames.map((game) => (
                    <motion.div
                        key={game.id}
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
                            <p className="text-accent text-sm md:text-base truncate">
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
                            <Link
                                to={`/game-details/${game.id}`}
                                className="mt-4 inline-block text-center bg-primary hover:bg-accent text-white px-5 py-2 rounded-full font-semibold transition-colors duration-300"
                            >
                                See More
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default AllGames;
