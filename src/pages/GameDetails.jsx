import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import useFetch from '../hooks/useFetch';
import Loader from '../componets/Loader';
import { FaStar } from 'react-icons/fa';


const GameDetails = () => {
    const { loading, data } = useFetch('/data.json')
    const [filteredData, setFilteredData] = useState([])
    console.log(data);
    const { id } = useParams()

    useEffect(() => {
        if (data && data.length > 0) {

            const found = [...data].find(singleData => String(singleData.id) === String(id))
            setFilteredData(found || null)

        }

    }, [data, id])


    // if (loading) {
    //     return <Loader />
    // }

    console.log(filteredData);
    return (
        <div className=' p-4 bg-[#F9F8F5]'>
            <title>Game Details</title>
            {loading && <Loader />}
            {
                !loading && data &&

                <div className="">
                    <div className="flex gap-4 flex-col md:flex-row  border-b pb-5 border-gray-300">
                        <div className="flex-1  image">
                            <img
                                className='bg-white p-4'
                                src={filteredData.coverPhoto} alt="" />

                        </div>
                        <div className="flex-1 content">
                            <h1 className='text-3xl font-bold'>{filteredData.title}</h1>

                            <p className='text-gray-400 pb-4 border-b border-gray-300'>Developed by: <span className='text-primary'>{filteredData.developer}</span></p>


                            <div className=" my-4">
                                <span className='flex text-yellow-500 gap-2 items-center'> <span> <FaStar /></span> {filteredData.ratings}</span>

                            </div>
                            <p className='font-bold pb-4'>Description:  <span className='text-gray-500'>{filteredData.description}</span></p>

                            <Link className='mt-4 text-white bg-primary hover:bg-primary/80 px-4 py-2 cursor-pointer rounded-lg' target='_blank' to={filteredData.downloadLink}>Download Now</Link>

                        </div>

                    </div>


                </div>
            }



        </div>
    );
};

export default GameDetails;