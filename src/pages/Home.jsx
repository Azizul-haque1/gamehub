import React from 'react';
import Slider from '../componets/Slider';
import PopularGames from '../componets/PopularGames';
import NewsLetter from '../componets/NewsLetter';
import HowGameHubWorks from '../componets/HowGameHubWorks';
import GameCategories from '../componets/GameCategories';

const Home = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <title>home</title>
            <section>
                <Slider />
            </section>
            <section className='mt-20'>
                <PopularGames />
                <HowGameHubWorks />

            </section>
            <GameCategories />
            <section>
                <NewsLetter />
            </section>
        </div>
    );
};

export default Home;