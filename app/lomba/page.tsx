"use client";
import React from 'react';
import CardListSection from '../components/CardListSection' 
import Navbar from '../components/Navbar'; 
import { useRouter } from 'next/navigation';
import Header from '../components/HeaderWithBackButton';
import SearchBar from '../components/SearchBar';


const LombaPage: React.FC = () => {
  const router = useRouter();https://github.com/Arlow5761/academihub/pull/1/conflict?name=app%252Flomba%252Fpage.tsx&base_oid=c55d8547b59d2fbd5dd33b4e9c4b73f6d12c2da9&head_oid=5634b16c398109280a0250f298c74f35e599a05a
  return (
    <main className="flex min-h-screen flex-col bg-[#F6F5F5]">
      <Navbar/>
      <div className="container mx-auto px-12 py-20">
        <Header title="Lomba" />
        <SearchBar/>
        <CardListSection/>
      </div>
    </main>
  );
};

export default LombaPage;