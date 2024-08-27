'use client'

import React, { useEffect, useState } from 'react';
import CardListSection from '../components/CardListSection' 
import Navbar from '../components/Navbar'; 
import Header from '../components/HeaderWithBackButton';
import SearchBar from '../components/SearchBar';
import ListSeminar from '../lib/listseminar';
import { LombaListData, SeminarListData } from '../lib/types';


const SeminarPage: React.FC = () => {
  const [search, SetSearch] = useState("");
  const [dataSeminar, SetDataSeminar] = useState<SeminarListData>({ count: 0, seminar: [] });

  useEffect( () => {
    async function InitializeDataLomba() {
      SetDataSeminar(await ListSeminar(0, 100, "", ""));
    }

    InitializeDataLomba();
  }, [])

  const OnSearch = async () => {
    SetDataSeminar(await ListSeminar(0, 100, search, ""));
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#F6F5F5]">
      <Navbar/>
      <div className="container mx-auto px-12 py-24">
        <Header title="Seminar" iconType='seminar' />
        <SearchBar setter={SetSearch} callback={OnSearch} />
        <CardListSection list={dataSeminar.seminar} type="seminar" />
      </div>
    </main>
  );
};

export default SeminarPage;