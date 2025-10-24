import React from 'react';
import Slider from '../componets/Slider';
import PopularGames from '../componets/PopularGames';

const Home = () => {
    return (
        <div>
            <section>
                <Slider />
            </section>
            <section className='mt-20'>
                <PopularGames />

            </section>
        </div>
    );
};

export default Home;