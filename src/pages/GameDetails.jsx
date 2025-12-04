import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import useFetch from '../hooks/useFetch';
import Loader from '../componets/Loader';
import { FaStar } from 'react-icons/fa';

const GameDetails = () => {
    const { loading, data } = useFetch('/allData.json');
    const [filteredData, setFilteredData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        if (data && data.length > 0) {
            const found = data.find(singleData => String(singleData.id) === String(id));
            setFilteredData(found || null);
        }
    }, [data, id]);

    if (loading || !filteredData) return <Loader />;

    return (
        <div className="min-h-screen bg-secondary text-base-content p-5 md:p-10">
            <title>{filteredData.title} - GameHub</title>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 bg-neutral rounded-2xl shadow-xl overflow-hidden">
                {/* Game Image */}
                <div className="flex-1 bg-base-100 p-4 flex items-center justify-center">
                    <img
                        src={filteredData.coverPhoto}
                        alt={filteredData.title}
                        className="rounded-xl object-cover max-h-[400px] md:max-h-[500px]"
                    />
                </div>

                {/* Game Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
                            {filteredData.title}
                        </h1>

                        <p className="text-gray-400 mb-4">
                            Developed by: <span className="text-accent">{filteredData.developer}</span>
                        </p>

                        <div className="flex items-center gap-2 text-yellow-400 mb-4">
                            <FaStar /> <span>{filteredData.ratings}</span>
                        </div>

                        <p className="mb-6">
                            <span className="font-bold text-primary">Description:</span>{" "}
                            <span className="text-gray-400">{filteredData.description}</span>
                        </p>
                    </div>

                    <div>
                        <Link
                            to={filteredData.downloadLink}
                            target="_blank"
                            className="inline-block bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Download Now 🚀
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameDetails;
