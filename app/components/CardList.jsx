"use client"
import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation'; // Mengimpor usePathname untuk mendapatkan informasi rute
import { FaBookmark } from 'react-icons/fa';

const Card = ({ imgUrl, title, url }) => {
  const pathname = usePathname(); // Mendapatkan path rute saat ini
  const isBookmarkPage = pathname === '/bookmark'; // Memeriksa apakah halaman saat ini adalah halaman bookmark

  return (
    <div className="relative border-4 border-[#1F3C88] rounded-xl overflow-hidden p-4">
      <div 
        className="h-52 md:h-72 bg-cover bg-center rounded-xl border border-white" 
        style={{ backgroundImage: `url(${imgUrl})` }}>
        {isBookmarkPage && (
          <div className="absolute top-6 right-5 text-white">
            <FaBookmark size={40} />
          </div>
        )}
      </div>
      <h2 className="text-center text-2xl text-[#000000] font-bold mt-4 mb-2">{title}</h2>
      <div className="flex justify-center py-2">
        <Link href={url}>
          <button className="bg-[#EE6F57] text-xl text-semibold text-white py-2 px-20 rounded-full hover:bg-[#1F3C88]">
            Lihat
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
