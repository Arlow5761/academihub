"use client";
import { useState, useEffect } from "react";

const Home = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isTagListVisible, setIsTagListVisible] = useState(false);
  const [error, setError] = useState(null);

  const categorizedTags = {
    Seminar: [
      "Webinar", "Seminar Offline", "Motivasi", "Wawasan", "Skill"
    ],
    Lomba: [
      "Olahraga", "Literasi", "Bisnis", "Budaya", "Visual/Estetika", "Debat", "Sains", "Sosial"
    ],
    Beasiswa: [
      "Mahasiswa Baru", "Beasiswa Kuliah", "Mahasiswa", "Beasiswa Luar Negeri",
      "Profesional Program", "Skill Development", "Beasiswa", "Study Exchange",
      "Global Youth Summit", "Beasiswa Pelatihan", "Pelajar", "Beasiswa Pendidikan",
      "Guru", "Beasiswa S2", "Professional Program", "Mahasiswi", "Professional Development",
      "Pegawai", "Beasiswa Unggulan"
    ] 
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch("/api/user/profile");
        if (response.status === 200) {
          const data = await response.json();
          setProfile(data);
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

  const cropImageToSquare = (image) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const size = Math.min(image.width, image.height);
    const offsetX = (image.width - size) / 2;
    const offsetY = (image.height - size) / 2;

    canvas.width = size;
    canvas.height = size;

    ctx.drawImage(image, offsetX, offsetY, size, size, 0, 0, size, size);

    return canvas;
  };

  const compressImage = (canvas) => {
    let quality = 1.0;
    let dataUrl = canvas.toDataURL("image/jpeg", quality);

    while (dataUrl.length > 1 * 1024 * 1024 && quality > 0.1) {
      quality -= 0.1;
      dataUrl = canvas.toDataURL("image/jpeg", quality);
    }

    return dataUrl;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          const canvas = cropImageToSquare(img);
          const compressedImage = compressImage(canvas);
          setProfile((prevProfile) => ({
            ...prevProfile,
            profilepicture: compressedImage,
          }));
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedProfile = {
      username: profile.username,
      password: null,
      job: profile.job,
      description: profile.description,
      tags: selectedTags,
      profilepicture: profile.profilepicture,
    };

    try {
      const response = await fetch("/api/user/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProfile),
      });

      if (response.ok) {
        console.log("Profile updated successfully.");
      } else {
        const errorData = await response.text();
        setError(`Failed to update profile: ${errorData}`);
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
      <header className="p-4 w-full fixed top-0 left-0 z-10">
        <div className="text-left text-4xl font-bold text-p-blue ml-4 font-raleway">
          <a href="/homepage" className="text-p-blue">AcademiHub</a>
        </div>
      </header>

      <div className="flex items-center justify-center w-full min-h-screen pt-16">
        <form
          onSubmit={handleSubmit}
          className="relative w-full max-w-md bg-white p-6 rounded-lg border border-gray-400 shadow-lg overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 4rem)" }}
        >
          <p className="text-center text-4xl font-bold text-p-blue">Edit</p>
          <p className="mt-4 text-p-dark-blue">Username</p>
          <input
            type="text"
            value={profile.username || ""}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
            placeholder="youruserhere"
            className="w-full pl-4 pr-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            minLength={1} // Batas minimum 1 karakter
            maxLength={16} // Batas maksimum 16 karakter
            required // Input tidak boleh kosong
          />
          
          <p className="mt-4 text-p-dark-blue">Profile Picture</p>
          <div className="flex items-center justify-center mb-4">
            <img
              src={profile.profilepicture || "/images/Profile1.png"}
              alt="Profile Preview"
              className="w-32 h-32 object-cover rounded-full border border-gray-300"
            />
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <p className="mt-4 text-p-dark-blue">Pekerjaan</p>
          <input
            type="text"
            value={profile.job || ""}
            onChange={(e) => setProfile({ ...profile, job: e.target.value })}
            placeholder="yourjobhere"
            className="w-full pl-4 pr-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          <p className="mt-4 text-p-dark-blue">Favorite Tags</p>
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

          <input
            type="text"
            value={searchQuery}
            onFocus={() => setIsTagListVisible(true)}
            onBlur={() => setTimeout(() => setIsTagListVisible(false), 200)}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search and select tags..."
            className="w-full pl-4 pr-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />

          {isTagListVisible && (
            <div className="mt-2 max-h-60 overflow-y-scroll border border-gray-300 rounded-lg p-2">
              {Object.entries(categorizedTags).map(([category, tagsInCategory]) => {
                const categoryMatches = category.toLowerCase().includes(searchQuery.toLowerCase());
                const filteredTagsInCategory = tagsInCategory.filter(tag =>
                  categoryMatches || tag.toLowerCase().includes(searchQuery.toLowerCase())
                ).filter(tag => !selectedTags.includes(tag));

                if (filteredTagsInCategory.length === 0) return null;

                return (
                  <div key={category}>
                    <div className="border-b border-gray-300 mb-2 opacity-70 text-gray-700 font-semibold">
                      {category}
                    </div>

                    {filteredTagsInCategory.map(tag => (
                      <button
                        key={tag}
                        onClick={() => handleTagClick(tag)}
                        className={`block w-full text-left px-4 py-2 rounded-lg mb-1 ${
                          selectedTags.includes(tag) ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                );
              })}
            </div>
          )}

          <p className="mt-4 text-p-dark-blue">Deskripsi</p>
          <textarea
            value={profile.description || ""}
            onChange={(e) =>
              setProfile({ ...profile, description: e.target.value })
            }
            placeholder="yourdescriptionhere"
            rows={1}
            className="w-full pl-4 pr-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />

          <div className="flex justify-between items-center mt-4 font-bold">
            <button
              type="submit"
              className="w-full bg-p-orange p-2 pr-2 rounded text-xl text-white"
            >
              Ubah
            </button>
          </div>

          <p className="text-p-gray-shaded text-center mt-4">atau</p>
          <p className="mt-4 text-center text-p-dark-blue">
            Tidak Jadi?{" "}
            <a href="/profile" className="text-p-orange">Kembali</a>
          </p>
        </form>
      </div>
      <div className="hidden md:block w-[811px] min-h-screen bg-p-blue">
      </div>
    </main>
  );
};

export default Home;