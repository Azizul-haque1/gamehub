import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import logo from '../assets/logo.png';
import { AuthContext } from '../contexts/AuthContext';
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
    const { user, signOutFunc } = use(AuthContext);
    const navigate = useNavigate();

    const links = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/all-games'>All games</NavLink>
        <NavLink to='/about'>About us</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/support'>Support</NavLink>
        <NavLink to='/community'>Community</NavLink>
    </>;

    const handleLogOut = () => {
        signOutFunc()
            .then(res => console.log(res))
            .catch(error => console.log(error));
    };

    return (
        <div className="px-0 navbar flex  ">
            <div className="navbar-start">
                <Link to='/'><img className='w-40' src={logo} alt="Logo" /></Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-white px-1 z-10">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">
                {user ? (
                    <div>
                        {/* Desktop */}
                        <div className='hidden md:flex items-center space-x-3'>
                            <div>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-primary">
                                    <div onClick={() => navigate('/my-profile')} className="w-10 rounded-full border-2 border-primary">
                                        <img
                                            referrerPolicy="no-referrer"
                                            alt="Profile"
                                            src={`${user?.photoURL ? user.photoURL : 'https://avatar.iran.liara.run/public/1'}`}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                className='px-3 py-1 rounded-full border border-transparent text-white bg-primary hover:bg-accent hover:text-white'
                                onClick={handleLogOut}
                                type='button'
                            >
                                Logout
                            </button>
                        </div>

                        {/* Mobile */}
                        <div className="dropdown block md:hidden dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border-primary">
                                <div className="w-10 rounded-full border-2 border-primary">
                                    <img
                                        referrerPolicy="no-referrer"
                                        alt="Profile"
                                        src={`${user?.photoURL ? user.photoURL : 'https://avatar.iran.liara.run/public/1'}`}
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                            >
                                <li onClick={() => navigate('/my-profile')}>
                                    <a className="justify-between text-primary">Profile</a>
                                </li>
                                <li onClick={handleLogOut}>
                                    <a className="text-primary">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className="space-x-2">
                        {/* Desktop */}
                        <div className="md:flex hidden">
                            <Link
                                to='/auth/login'
                                className='px-4 py-1 rounded-full border border-transparent text-white bg-primary hover:bg-accent hover:text-white'
                            >
                                Login
                            </Link>
                            <Link
                                to='/auth/register'
                                className='px-4 py-1 rounded-full border border-transparent text-white bg-accent hover:bg-primary hover:text-white'
                            >
                                Sign Up
                            </Link>
                        </div>

                        {/* Mobile */}
                        <div className="dropdown block md:hidden dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle text-white">
                                <CiMenuFries />
                            </div>
                            <ul
                                tabIndex="1"
                                className="menu menu-sm dropdown-content text-primary bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                            >
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/community'>Community</Link></li>
                                <li><Link to='/auth/login'>Login</Link></li>
                                <li><Link to='/auth/register'>Sign Up</Link></li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
