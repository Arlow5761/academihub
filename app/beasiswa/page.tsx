import React from 'react';
import CardListSection from '../components/CardListSection' 
import Navbar from '../components/Navbar'; 
import Header from '../components/HeaderWithBackButton';
import SearchBar from '../components/SearchBar';
import ListBeasiswa from '../lib/listbeasiswa';


const BeasiswaPage: React.FC = async () => {
  const dataBeasiswa = await ListBeasiswa(0, 10, "", "")

  return (
    <main className="flex min-h-screen flex-col bg-[#F6F5F5]">
      <Navbar/>
      <div className="container mx-auto px-12 py-20">
        <Header title="Beasiswa" />
        <SearchBar/>
        <CardListSection list={dataBeasiswa.beasiswa} type="beasiswa" />
      </div>
    </main>
  );
};

export default BeasiswaPage;