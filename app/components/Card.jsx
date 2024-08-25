import React from 'react';
import Link from "next/link";

const Card = ({ imgUrl, title, url }) => {
  return (
    <div className="relative border-4 border-[#1F3C88] rounded-xl overflow-hidden p-2">
      <div 
        className="h-52 md:h-72 bg-cover bg-center rounded-xl border " 
        style={{ backgroundImage: `url(${imgUrl})` }}>
      </div>
      <h2 className='text-center text-4xl text-[#1F3C88] font-bold my-2'>{title}</h2>
      <hr style={{ borderTop: "2px solid #1F3C88", borderRadius: "0.5rem", margin: "0 1rem" }} />
      <div className="flex justify-center py-2">
        <Link href={url}>
          <button className="bg-[#EE6F57] text-white py-2 px-4 rounded-full hover:bg-[#1F3C88]">
            Selengkapnya &gt;&gt;&gt;
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Card;
