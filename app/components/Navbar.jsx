"use client";
import React, { useState, useEffect } from 'react';
import NavLink from "./NavLink";
import Link from "next/link";
import { useRouter } from 'next/navigation';

const navLinks = [
    {
        title: "Category",
        path: "#category",
        submenu: [
            { title: "Beasiswa", path: "/beasiswa" },
            { title: "Lomba", path: "/lomba" },
            { title: "Seminar", path: "/seminar" },
        ],
    },
    {
        title: "Saved",
        path: "/bookmark",
    }
];

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await fetch('/api/user/profile');
                if (response.status === 200) {
                    setIsLoggedIn(true);
                } else if (response.status === 404) {
                    setIsLoggedIn(false);
                } else {
                    console.error('Unexpected response status:', response.status);
                }
            } catch (error) {
                console.error('Error checking login status:', error);
                setIsLoggedIn(false);
            }
        };

        checkLoginStatus();
    }, []);

    const toggleDropdown = (index) => {
        if (openDropdown === index) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(index);
        }
    };

    const handleLogout = async () => {
        try {
            const response = await fetch('/api/user/logout', { method: 'GET' });

            if (response.ok) {
                setIsLoggedIn(false);
                router.push('/');
            } else {
                console.error('Failed to logout:', response.status);
            }
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#1F3C88] text-[#F6F5F5] bg-opacity-100'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-3'>
                <Link href={"/"} className='text-2xl md:text-4xl text-[#F6F5F5] font-semibold'>
                    AcademiHub
                </Link>
                <div className='menu md:block md:w-auto' id='navbar'>
                    <ul className='flex items-center justify-center space-x-4'>
                        {navLinks.map((link, index) => (
                            <li key={index} className='relative flex items-center'>
                                {link.submenu ? (
                                    <>
                                        <button
                                            onClick={() => toggleDropdown(index)}
                                            className='flex items-center justify-center py-2 px-4 text-base sm:text-xl rounded hover:text-gray-300 focus:outline-none'
                                        >
                                            {link.title}
                                        </button>
                                        {openDropdown === index && (
                                            <div className='absolute mt-2 w-48 bg-white rounded-md shadow-lg z-10'>
                                                <ul className='py-2 text-[#1F3C88]'>
                                                    {link.submenu.map((item, idx) => (
                                                        <li key={idx} className="px-4 py-2 hover:bg-gray-200">
                                                            <Link href={item.path}>
                                                                {item.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <NavLink href={link.path} title={link.title} className="flex items-center justify-center py-2 px-4 text-base sm:text-xl hover:text-gray-300 focus:outline-none" />
                                )}
                            </li>
                        ))}
                        {isLoggedIn ? (
                            <>
                                <li className="flex items-center justify-center">
                                    <NavLink href="/profile" title="Profile" className="flex items-center justify-center py-2 px-4 text-base sm:text-xl hover:text-gray-300 focus:outline-none" />
                                </li>
                                <li className="flex items-center justify-center">
                                    <a
                                        onClick={handleLogout}
                                        className='flex items-center justify-center py-2 px-4 text-base sm:text-xl font rounded-lg bg-red-600 hover:bg-red-700 text-white cursor-pointer'
                                    >
                                        Logout
                                    </a>
                                </li>
                            </>
                        ) : (
                            <li className="flex items-center justify-center">
                                <NavLink href="/login" title="Login" className="flex items-center justify-center py-2 px-4 text-base sm:text-xl hover:text-gray-300 focus:outline-none" />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );       
};

export default Navbar;
