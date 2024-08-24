"use client";
import { useState } from "react";

const Home = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isTagListVisible, setIsTagListVisible] = useState(false);

  const tags = ["Competitive Programming", "Capture The Flag", "Business Case Competition"];
  
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
    <main className="flex flex-col items-center bg-black min-h-screen">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative w-full max-w-md bg-white p-6 rounded-lg">
          <p className="mt-4">Username</p>
          <input
            type="text"
            placeholder="yourusernamehere"
            className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="mt-4">Favorite Tags</p>

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
            className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

          <div className="flex justify-between items-center mt-4 font-bold rounded">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 p-2 pr-2 rounded text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
