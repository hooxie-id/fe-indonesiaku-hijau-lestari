import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className='flex justify-center items-center bg-green-200 text-black p-2 px-5 2xl:px-32'>
                <div className='md:flex items-center space-x-4'>
                    <div className='text-2xl font-bold justify-center items-center flex'>
                        <img src='assets/images/logo.png' alt='Logo' width={150} height={150} />
                    </div>
                    <div className='flex flex-col items-center text-center space-y-1'>
                        <h2 className='text-lg font-bold underline'>LEMBAGA SWADAYA MASYARAKAT</h2>
                        <p className='text-xs font-bold'>SK NOMOR AHU-0000411 .AH.01.07.TAHUN 2022</p>
                        <h1 className='text-2xl font-bold text-green-500'>INDONESIAKU HIJAU LESTARI</h1>
                        <p className='text-xs font-semibold'>JALAN LANGSEP NO. 1, ORO-ORO OMBO - BATU (65311)</p>
                        <p className='text-xs font-semibold'>
                            <span className='hover:underline'><a href='https://indonesiakuhijaulestari.org'>www.indonesiakuhijaulestari.org</a></span> |
                            <span className='hover:underline'><a href='mailto:official@indonesiakuhijaulestari.org'>official@indonesiakuhijaulestari.org</a></span> |
                            <span className='hover:underline'>Instagram <a href='https://www.instagram.com/indonesiakuhijaulestari/'>@indonesiakuhijaulestari</a></span>
                        </p>
                    </div>
                </div>
            </div>
            <nav className='bg-green-500 text-gray-100 p-2 px-10 2xl:px-32 sticky top-0'>
                <div className='flex justify-between items-center'>
                    <div className='hidden md:flex'>
                        <ul className='flex space-x-5 uppercase font-semibold'>
                            <li>
                                <NavLink
                                    exact to='/'
                                    className='transition-all duration-300 hover:text-black'
                                    activeClassName='text-black'
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/profile'
                                    className='transition-all duration-300 hover:text-black'
                                    activeClassName='text-black'
                                >
                                    Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/member'
                                    className='transition-all duration-300 hover:text-black'
                                    activeClassName='text-black'
                                >
                                    Member
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/contact'
                                    className='transition-all duration-300 hover:text-black'
                                    activeClassName='text-black'
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='md:hidden flex justify-center items-center'>
                        <button onClick={toggleMenu} className='focus:outline-none'>
                            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                            </svg>
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className='md:hidden'>
                        <ul className='flex flex-col space-y-5 uppercase font-semibold'>
                            <li>
                                <NavLink
                                    exact to='/'
                                    className='transition-all duration-300 hover:text-black'
                                    activeClassName='text-black'
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/profile'
                                    className='transition-all duration-300 hover:text-black'
                                    activeClassName='text-black'
                                >
                                    Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/member'
                                    className='transition-all duration-300 hover:text-black'
                                    activeClassName='text-black'
                                >
                                    Member
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/contact'
                                    className='transition-all duration-300 hover:text-black'
                                    activeClassName='text-black'
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
