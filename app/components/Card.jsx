import React from 'react';
import Link from "next/link";

const Card = ({ imgUrl, title, url }) => {
  return (
    <div className="relative border-4 border-[#1F3C88] rounded-xl overflow-hidden">
      <div 
        className="h-52 md:h-72 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imgUrl})` }}>
      </div>
      <h2 className='text-center text-4xl font-bold my-2'>{title}</h2>
      <hr style={{ borderTop: "2px solid #1F3C88", borderRadius: "0.5rem", margin: "0 1rem" }} />
      <div className="flex justify-center py-2">
        <Link href={url}>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-xl hover:bg-blue-700">
            Selengkapnya &gt;&gt;&gt;
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Card;
