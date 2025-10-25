import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import logo from '../assets/logo.png'
import { AuthContext } from '../contexts/AuthContext';
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
    const { user, signOutFunc } = use(AuthContext)
    const navigate = useNavigate()
    console.log(user);
    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/community'>Community</NavLink>
    </>

    const handleLogOut = () => {
        signOutFunc()
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className="navbar flex  z-10 ">
            <div className="navbar-start">
                <div className="dropdown">

                </div>
                <Link to='/'><img className='w-40' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex  ">
                <ul className="menu menu-horizontal  text-white px-1 z-10 
                ">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="">
                        <div className=' hidden md:flex items-center space-x-3'>
                            <div className="">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div onClick={() => navigate('/my-profile')} className="w-10 rounded-full">
                                        <img

                                            referrerPolicy="no-referrer"
                                            alt="Tailwind CSS Navbar component"
                                            src={`${user?.photoURL ? user.photoURL : 'https://avatar.iran.liara.run/public/1'}`} />


                                    </div>
                                </div>


                            </div>
                            <button className=' px-3 py-1 rounded-full border border-transparent text-white bg-primary hover:border-primary hover:bg-white hover:text-primary' onClick={handleLogOut} type='button'>Logout</button>

                        </div>
                        <div className="dropdown block md:hidden dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img

                                        referrerPolicy="no-referrer"
                                        alt="Tailwind CSS Navbar component"
                                        src={`${user?.photoURL ? user.photoURL : 'https://avatar.iran.liara.run/public/1'}`} />


                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li onClick={() => navigate('/my-profile')}>
                                    <a className="justify-between">
                                        Profile

                                    </a>
                                </li>
                                <li onClick={handleLogOut}><a>Logout</a></li>
                            </ul>
                        </div>

                    </div>
                        : <div className="  space-x-2">

                            <div className=" md:flex  hidden">
                                <Link to='/auth/login' className='px-4 py-1 rounded-full border border-transparent text-white bg-primary hover:border-primary hover:bg-white hover:text-primary'>Login</Link>

                                <Link to='/auth/register' className='px-4 py-1 rounded-full border border-transparent text-white bg-secondary hover:border-primary hover:bg-white hover:text-primary'>Sign Up</Link>

                            </div>
                            <div className="dropdown block md:hidden dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="text-white">
                                        <CiMenuFries />

                                    </div>
                                </div>
                                <ul
                                    tabIndex="1"
                                    className="menu  menu-sm dropdown-content text-black bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li> <Link to='/'>Home</Link> </li>
                                    <li> <Link to='/community'>Community</Link> </li>
                                    <li> <Link to='/auth/login'>Login</Link> </li>
                                    <li><Link to='/auth/register'>Sign Up</Link></li>



                                </ul>
                            </div>

                        </div>


                }
            </div>
        </div>
    );
};

export default Navbar;