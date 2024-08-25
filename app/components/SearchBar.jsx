import React from 'react'

const SearchBar = () => {
  return (

    <div className="flex items-center space-x-2 my-4 ml-14">
        <input
            type="text"
            placeholder="Cari Berdasarkan Nama"
            className="border rounded-full p-2 w-50"
        />
        <button className="bg-[#EE6F57] text-white p-2 px-4 rounded-full hover:bg-red-600">
            Search
        </button>
    </div>
  );
}

export default SearchBar