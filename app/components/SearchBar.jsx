import React from 'react'

const SearchBar = (args) => {
  const setter = args.setter;
  const callback = args.callback;

  return (
    <div className="flex items-center space-x-2 my-4 ml-14">
        <input
            type="text"
            placeholder="Cari Berdasarkan Nama"
            className="border rounded-full p-2 w-50"
            onChange={(e) => setter(e.target.value)}
        />
        <button className="bg-[#EE6F57] text-white p-2 px-4 rounded-full hover:bg-red-600" onClick={callback}>
            Search
        </button>
    </div>
  );
}

export default SearchBar