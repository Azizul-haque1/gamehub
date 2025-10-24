import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Link } from 'react-router';

const Profile = () => {
    const { user, updateProfileFunc } = use(AuthContext)

    const handleUpdataProfile = () => {

    }
    return (
        <div className="hero h-screen">
            <div className='  flex  justify-center items-center rounded-2xl   p-20 shadow-2xl'>
                <div className="flex space-x-10 items-center ">
                    <div className=" flex items-center justify-center w-40 h-40 rounded-full border-2 border-gray-200 ">
                        <img className='w-full h-full rounded-full  object-cover'

                            referrerPolicy="no-referrer"
                            alt="Tailwind CSS Navbar component"
                            src={`${user?.photoURL ? user.photoURL : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}`} />

                    </div>

                    <div className="">
                        <h1 className='text-4xl my-4 text-primary'>My Profile Information</h1>
                        <p className='text-gray-500 text-xs mb-1'>Full Name</p>
                        <h1 className='text-xl bg-gray-100 p-1 rounded-xs'>{user.displayName}</h1>
                        <p className='text-gray-500 text-xs mt-2 mb-1'>Emal</p>
                        <h1 className='text-xl bg-gray-100 p-1 rounded-xs mb-5'>{user.email}</h1>
                        <Link to='/update-profile' className='px-4 py-1 w-full rounded-full border border-transparent text-white bg-primary hover:border-primary hover:bg-white hover:text-primary'>Update </Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Profile;