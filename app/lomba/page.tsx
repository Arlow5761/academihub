import React from 'react';
import CardListSection from '../components/CardListSection' 
import Navbar from '../components/Navbar'; 
import Header from '../components/HeaderWithBackButton';
import SearchBar from '../components/SearchBar';
import ListLomba from '../lib/listlomba';



const LombaPage: React.FC = async () => {
  const dataLomba = (await ListLomba(0, 10, "", ""));
  
  return (
    <main className="flex min-h-screen flex-col bg-[#F6F5F5]">
      <Navbar/>
      <div className="container mx-auto px-12 py-20">
        <Header title="Lomba" />
        <SearchBar/>
        <CardListSection list={dataLomba.lomba} type="lomba" />
      </div>
    </main>
  );
};

export default LombaPage;