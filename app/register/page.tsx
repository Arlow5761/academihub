"use client";
import { useState } from "react";

const Home = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isTagListVisible, setIsTagListVisible] = useState(false);

  const tags = ["Competitive Programming", "Capture The Flag", "Business Case Competition"];

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleRemoveTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  const filteredTags = tags.filter((tag) =>
    tag.toLowerCase().includes(searchQuery.toLowerCase()) &&
    !selectedTags.includes(tag)
  );

  return (
    <main className="flex flex-row items-stretch bg-white min-h-screen">
      {/* Header with your name */}
      <header className="bg-white p-4 w-0">
        <div className="text-left text-4xl font-bold text-p-blue ml-4 font-raleway">
          AcademiHub
        </div>
      </header>
      
      {/* Bagian kiri untuk login form */}
      <div className="flex items-center justify-center w-2/3 min-h-screen">
        <div className="relative w-full max-w-md bg-white p-6 rounded-lg border border-gray-400 shadow-lg">
          <p className='text-center text-4xl font-bold text-p-blue'>Login</p>
          <p className='mt-4 text-p-dark-blue'>Username</p>
          <input 
            type="text" 
            placeholder="youruserhere" 
            className="w-full pl-4 pr-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="mt-4 text-p-dark-blue">Password</p>
          <div className="relative">
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="yourpasshere"
              className="w-full pl-4 pr-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
              {passwordVisible ? 'Hide' : 'Show'}
            </button>
          </div>
          
          <p className="mt-4 text-p-dark-blue">Favorite Tags</p>
          {/* Selected Tags as Bubbles */}
          {selectedTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {selectedTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-500 text-white rounded-full flex items-center space-x-2"
                >
                  <span>{tag}</span>
                  <button
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-2 text-sm text-white hover:text-red-300"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Search Input */}
          <input
            type="text"
            value={searchQuery}
            onFocus={() => setIsTagListVisible(true)}
            onBlur={() => setTimeout(() => setIsTagListVisible(false), 200)}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search and select tags..."
            className="w-full pl-4 pr-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          {/* Tag List */}
          {isTagListVisible && (
            <div className="mt-2 max-h-40 overflow-y-scroll border border-gray-300 rounded-lg p-2">
              {filteredTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`block w-full text-left px-4 py-2 rounded-lg mb-1 ${
                    selectedTags.includes(tag)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
          
          <div className="flex justify-between items-center mt-4 font-bold">
            <button type="submit" className="w-full bg-p-orange p-2 pr-2 rounded text-xl text-white">
              Login
            </button>
          </div>

          <p className='text-p-gray-shaded text-center mt-4'>atau</p>
          <p className='mt-4 text-center text-p-dark-blue'>Sudah mempunyai akun? <a href='/' className='text-p-orange'>Login</a></p>
        
        </div>
      </div>
      
      {/* Bagian kanan dengan background putih */}
      <div className="w-[811px] min-h-screen bg-p-blue">
        {/* Konten kosong */}
      </div>
    </main>
  );
};

export default Home;
