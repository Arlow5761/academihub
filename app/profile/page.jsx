"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Header from '../components/HeaderWithBackButton';
import { FaPencilAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

const Home = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await fetch('/api/user/profile');
                if (response.status === 200) {
                    const data = await response.json();
                    setProfile(data);
                } else {
                    console.error("Failed to fetch profile data, status code:", response.status);
                }
            } catch (error) {
                console.error("Error fetching profile data:", error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchProfileData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!profile) {
        return <div>Error loading profile data</div>;
    }

    return (
        <main className="bg-p-white min-h-screen">
            <Navbar/>
            <div className="container mx-auto px-12 pt-24">
            <Header title="Setting Profile" iconType="profile" />
            </div>
            <div className="flex items-center justify-center py-10">
                <div className="relative w-full max-w-[800px] bg-white p-6 rounded-lg border border-gray-200 shadow-lg">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start">
                        <div className="flex flex-col items-center lg:items-start mb-8 lg:mb-0 pl-4">
                            <Image
                                src={profile.profilepicture || "/images/Profile1.png"}
                                alt="Profile Image"
                                width={200}
                                height={200}
                                className="object-cover rounded-full"
                            />
                            <a href="/profile/edit" className="mt-4 ml-12 mr-12">
                                <button className="bg-p-orange hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg flex items-center space-x-2">
                                    <FaPencilAlt />
                                    <span>Edit</span>
                                </button>
                            </a>
                        </div>

                        <div className="flex flex-col justify-center w-full lg:w-[60%] pl-0 lg:pl-12">
                            <h2 className="text-3xl font-bold">{profile.username}</h2>
                            <p>------------------------------------</p>
                            <p className="text-xl text-gray-600 mt-1">Pekerjaan: {profile.job || "N/A"}</p>

                            <h3 className="text-2xl font-semibold mt-6">Minat/Tags:</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {profile.tags && profile.tags.map((tag, index) => (
                                    <span key={index} className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-2xl font-semibold mt-6">Deskripsi Diri:</h3>
                            <p className="text-lg text-gray-600 mt-2">{profile.description || "Deskripsi Kamu Disini"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;