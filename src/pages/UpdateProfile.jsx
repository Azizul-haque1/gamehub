import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { toast } from 'react-toastify';
import Loader from '../componets/Loader';
import { useNavigate } from 'react-router';


const UpdateProfile = () => {
    const { user, setUser, updateProfileFunc, loading, setLoading, } = use(AuthContext)
    const navigate = useNavigate()

    if (loading) {
        return <Loader />
    }
    const handleUpdataProfile = (e) => {
        e.preventDefault()
        const form = e.target;
        const displayName = form.name.value;
        const photoURL = form.photo.value;


        updateProfileFunc(displayName, photoURL)
            .then(res => {
                console.log(res);
                toast.success('Profile updated successfully!')
                setLoading(false)
                navigate('/my-profile')
                setUser(res.user)
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className="hero h-screen">
            <title>Update Profile</title>
            <div className='  flex  justify-center items-center rounded-2xl   bg-white/10 py-20  px-30 shadow-2xl'>
                <div className="flex space-x-10 items-center ">
                    <div className=" flex items-center justify-center w-40 h-40 rounded-full border-2 border-gray-200 ">
                        <img className='w-full h-full rounded-full  object-cover'

                            referrerPolicy="no-referrer"
                            alt="Tailwind CSS Navbar component"
                            src={`${user?.photoURL ? user.photoURL : 'https://avatar.iran.liara.run/public/1'}`} />

                    </div>

                    <div className="">
                        <h1 className='text-4xl my-4 text-primary  pr-10'>Update Profile </h1>

                        <form onSubmit={handleUpdataProfile}>
                            <p className='text-gray-500 text-xs mb-1'>Full Name</p>
                            <input defaultValue={user?.displayName || ''} name='name' type="text" className="input border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent " placeholder="Name" />
                            <p className='text-gray-500 text-xs mt-2 mb-1'>Photo</p>

                            <input name='photo' type="text" className="input border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:placeholder-neutral-content mb-5" placeholder="Photo url here" />

                            <button type='submit' className=' flex items-center justify-center w-full gap-3 px-4 py-1  rounded-full border border-transparent text-white bg-primary hover:border-primary hover:bg-white hover:text-primary'><IoCheckmarkDoneCircleSharp />

                                Done </button>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default UpdateProfile;