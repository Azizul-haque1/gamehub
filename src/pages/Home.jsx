import React from 'react';
import Slider from '../componets/Slider';
import PopularGames from '../componets/PopularGames';
import NewsLetter from '../componets/NewsLetter';

const Home = () => {
    return (
        <div>
            <title>home</title>
            <section>
                <Slider />
            </section>
            <section className='mt-20'>
                <PopularGames />
            </section>
            <section>
                <NewsLetter />
            </section>
        </div>
    );
};

export default Home;