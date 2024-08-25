"use client"; 

import React from 'react';
import { useRouter } from 'next/navigation';

interface HeaderWithBackButtonProps {
  title: string;
}

const HeaderWithBackButton: React.FC<HeaderWithBackButtonProps> = ({ title }) => {
  const router = useRouter();

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
          className="group-hover:stroke-[#EE6F57] w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <h1 className="text-3xl text-[#1F3C88] font-semibold ml-4">{title}</h1>
    </div>
  );
};

export default HeaderWithBackButton;
