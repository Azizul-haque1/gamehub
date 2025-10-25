import React, { use, useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import GameCard from './GameCard';
import Loader from './Loader';
import { motion } from "motion/react"
const PopularGames = () => {
    const { loading, error, data } = useFetch('/data.json')
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

    console.log(data);
    return (
        <div className='w-11/12 mx-auto '>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold text-center text-primary  '>Popular Games</h1>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.50 }}
                className="grid grid-cols-1
                  md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 ">
                {newData.map((singleGame) => <GameCard key={singleGame.id} singleGame={singleGame}></GameCard>)}

            </motion.div>
        </div>
    );
};

export default PopularGames;