import React from 'react';
import CardListSection from '../components/CardListSection' 
import Navbar from '../components/Navbar'; 
import Header from '../components/HeaderWithBackButton';
import SearchBar from '../components/SearchBar';
import ListSeminar from '../lib/listseminar';


const SeminarPage: React.FC = async () => {
  const dataSeminar = await ListSeminar(0, 10, "", "");

  return (
    <main className="flex min-h-screen flex-col bg-[#F6F5F5]">
      <Navbar/>
      <div className="container mx-auto px-12 py-20">
        <Header title="Seminar" />
        <SearchBar/>
        <CardListSection list={dataSeminar.seminar} type="seminar" />
      </div>
    </main>
  );
};

export default SeminarPage;