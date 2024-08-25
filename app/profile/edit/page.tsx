"use client";
import { useState, useEffect } from "react";

const Home = () => {
  // Initialize states
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isTagListVisible, setIsTagListVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const tags = ["Competitive Programming", "Capture The Flag", "Business Case Competition", "UI/UX", "Game Development"];

  // Fetch profile data on component mount
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch('/api/user/fullprofile'); // Adjust the endpoint if needed
        if (response.status === 200) {
          const data = await response.json();
          setUsername(data.username || "");
          setName(data.name || "");
          setJob(data.job || "");
          setDescription(data.description || "");
          setSelectedTags(data.tags || []);
        } else {
          setError("Failed to load profile data.");
        }
      } catch (error) {
        setError("An error occurred while fetching profile data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  // Handle tag click
  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // Handle removing a tag
  const handleRemoveTag = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  // Filter out selected tags from the list
  const filteredTags = tags
    .filter((tag) =>
      tag.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((tag) => !selectedTags.includes(tag));

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedProfile = {
      username,
      name,
      job,
      description,
      tags: selectedTags,
    };

    try {
      const response = await fetch('/api/user/fullprofile', {
        method: 'PUT', // Use the appropriate HTTP method for updating
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProfile),
      });

      if (response.ok) {
        // Handle successful update (e.g., redirect or show success message)
      } else {
        setError("Failed to update profile.");
      }
    } catch (error) {
      setError("An error occurred while updating the profile.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main className="flex flex-row bg-white min-h-screen">
      {/* Header with your name */}
      <header className= "p-4 w-full fixed top-0 left-0 z-10">
        <div className="text-left text-4xl font-bold text-p-blue ml-4 font-raleway">
          AcademiHub
        </div>
      </header>
      
      {/* Bagian kiri untuk login form */}
      <div className="flex items-center justify-center w-full min-h-screen pt-16">
        <form onSubmit={handleSubmit} className="relative w-full max-w-md bg-white p-6 rounded-lg border border-gray-400 shadow-lg overflow-y-auto" style={{ maxHeight: 'calc(100vh - 4rem)' }}>
          <p className='text-center text-4xl font-bold text-p-blue'>Edit</p>
          <p className='mt-4 text-p-dark-blue'>Username</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="youruserhere"
            className="w-full pl-4 pr-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <p className='mt-4 text-p-dark-blue'>Nama</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="yournamehere"
            className="w-full pl-4 pr-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />  

          <p className='mt-4 text-p-dark-blue'>Pekerjaan</p>
          <input
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            placeholder="yourjobhere"
            className="w-full pl-4 pr-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

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

          <p className='mt-4 text-p-dark-blue'>Deskripsi</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="yourdescriptionhere"
            rows={1}
            className="w-full pl-4 pr-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />

          <div className="flex justify-between items-center mt-4 font-bold">
            <button type="submit" className="w-full bg-p-orange p-2 pr-2 rounded text-xl text-white">
              Ubah
            </button>
          </div>

          <p className='text-p-gray-shaded text-center mt-4'>atau</p>
          <p className='mt-4 text-center text-p-dark-blue'>Tidak Jadi? <a href='/profile' className='text-p-orange'>Kembali</a></p>
        
        </form>
      </div>
      
      {/* Bagian kanan dengan background putih */}
      <div className="w-[811px] min-h-screen bg-p-blue">
        {/* Konten kosong */}
      </div>
    </main>
  );
};

export default Home;
