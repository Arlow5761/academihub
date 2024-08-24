"use client";
import React from 'react';
import CardSection from '../components/CardSection' 
import Navbar from '../components/Navbar'; 
import { useRouter } from 'next/navigation';
import Header from '../components/HeaderWithBackButton';
import SearchBar from '../components/SearchBar';


const BeasiswaPage: React.FC = () => {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col bg-[#F6F5F5]">
      <Navbar/>
      <div className="container mx-auto px-12 py-20">
        <Header title="Beasiswa" />
        <SearchBar/>
        <CardSection/>
      </div>
    </main>
  );
};

export default BeasiswaPage;