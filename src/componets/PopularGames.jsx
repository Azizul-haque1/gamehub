import React, { use, useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import GameCard from './GameCard';
import Loader from './Loader';

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
            <h1 className='text-3xl font-bold text-center text-primary'>Popular Games</h1>
            <div className="grid grid-cols-3 gap-4 ">
                {newData.map((singleGame) => <GameCard key={singleGame.id} singleGame={singleGame}></GameCard>)}

            </div>
        </div>
    );
};

export default PopularGames;