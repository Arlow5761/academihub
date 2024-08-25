"use client";
import React, { useState } from 'react';
import NavLink from "./NavLink";
import Link from "next/link";

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
        path: "#saved",
    },
    {
        title: "Profile",
        path: "#profile",
    },
    {
        title: "Login",
        path: "/login",
    }
]

const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (index) => {
        if (openDropdown === index) {
            setOpenDropdown(null); // Tutup dropdown jika diklik lagi
        } else {
            setOpenDropdown(index); // Buka dropdown untuk kategori tertentu
        }
    };

    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#1F3C88] text-[#F6F5F5] bg-opacity-100'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-3'>
                <Link href={"/"} className='text-2xl md:text-4xl text-[#F6F5F5] font-semibold'>
                    AcademiHub
                </Link>
                <div className='menu md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index} className='relative'>
                                {link.submenu ? (
                                    <>
                                        <button
                                            onClick={() => toggleDropdown(index)}
                                            className='block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 hover:text-gray-300 focus:outline-none'
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
                                    <NavLink href={link.path} title={link.title} />
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
