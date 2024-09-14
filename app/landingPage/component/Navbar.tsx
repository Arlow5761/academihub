import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-100 shadow-xl">
      <div className="flex flex-col md:flex-row items-center justify-between mx-auto px-4 py-3">
        <Link
          href={"/"}
          className="text-2xl md:text-4xl text-[#1F3C88] font-semibold mb-4 md:mb-0"
        >
          AcademiHub
        </Link>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button className="border-2 border-orange-500 bg-white text-orange-500 text-lg md:text-xl font-semibold py-2 px-6 md:px-10 rounded-full hover:bg-orange-500 hover:text-white">
            <Link href={"/register"}>Sign Up</Link>
          </button>
          <button className="border-2 border-orange-500 bg-orange-500 text-lg md:text-xl font-semibold text-white py-2 px-6 md:px-10 rounded-full hover:bg-white hover:text-orange-500">
            <Link href={"/login"}>Login</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;