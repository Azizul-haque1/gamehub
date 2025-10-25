import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link, useLocation } from 'react-router';
import { FaUserEdit } from 'react-icons/fa';
import Loader from '../componets/Loader';

const Profile = () => {
    const { user, loading } = use(AuthContext)



    if (loading) {
        return <Loader />
    }


    return (
        <div className="hero h-screen">
            <title>profile</title>
            <div className='  flex  justify-center items-center rounded-2xl bg-white/10   p-20 shadow-2xl'>
                <div className="flex flex-col md:flex-row md:justify-center space-x-10 items-center ">
                    <div className=" flex items-center justify-center w-40 h-40 rounded-full border-2 border-gray-200 ">
                        <img className='w-full h-full rounded-full  object-cover'

                            referrerPolicy="no-referrer"
                            alt="Tailwind CSS Navbar component"
                            src={`${user?.photoURL ? user.photoURL : 'https://avatar.iran.liara.run/public/1'}`} />

                    </div>

                    <div className="">
                        <h1 className='text-4xl my-4 text-primary'>My Profile Information</h1>
                        <p className='text-gray-500 text-xs mb-1'>Full Name</p>
                        <h1 className='text-xl bg-gray-100 p-1 rounded-xs'>{user.displayName}</h1>
                        <p className='text-gray-500 text-xs mt-2 mb-1'>Emal</p>
                        <h1 className='text-xl bg-gray-100 p-1 rounded-xs mb-5'>{user.email}</h1>
                        <Link to='/update-profile' className=' flex items-center  gap-1  justify-center px-4 py-1 w-full rounded-full border border-transparent text-white bg-primary hover:border-primary hover:bg-white hover:text-primary'><span><FaUserEdit />
                        </span> Update</Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Profile;