"use client"; 

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; 
import detailIcon from '/public/images/Detail.svg';
import bookmarkIcon from '/public/images/Bookmark.svg';
import beasiswaIcon from '/public/images/Beasiswa.svg';
import lombaIcon from '/public/images/Lomba.svg';
import seminarIcon from '/public/images/Seminar.svg';
import profileIcoan from '/public/images/Profile.svg';

interface HeaderWithBackButtonProps {
  title: string;
  iconType: 'detail' | 'bookmark' | 'beasiswa' | 'lomba' | 'seminar' | 'profile'; 
}

const HeaderWithBackButton: React.FC<HeaderWithBackButtonProps> = ({ title, iconType }) => {
  const router = useRouter();

  const renderIcon = () => {
    switch (iconType) {
      case 'detail':
        return <Image src={detailIcon} alt="Detail Icon" width={40} height={40} />;
      case 'bookmark':
        return <Image src={bookmarkIcon} alt="Bookmark Icon" width={40} height={40} />;
      case 'beasiswa':
        return <Image src={beasiswaIcon} alt="Beasiswa Icon" width={40} height={40} />;
      case 'lomba':
        return <Image src={lombaIcon} alt="Lomba Icon" width={40} height={40} />;
      case 'seminar':
        return <Image src={seminarIcon} alt="Seminar Icon" width={40} height={40} />;
      case 'profile':
        return <Image src={profileIcoan} alt="Profile Icon" width={40} height={40} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center">
      <button
        className="group border-2 border-[#1F3C88] text-[#1F3C88] hover:border-[#EE6F57] p-2 rounded-full hover:bg-gray-200 focus:outline-none"
        onClick={() => router.push('/')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="group-hover:stroke-[#EE6F57] w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div className="flex items-center ml-6 space-x-6">
        {renderIcon()}
        <div className="border-l-2 border-[#1F3C88] h-10 mx-3"></div> {/* Garis Vertikal */}
        <h1 className="text-4xl text-[#1F3C88] font-semibold">{title}</h1>
      </div>
    </div>
  );
};

export default HeaderWithBackButton;
