'use client'

import React, { useEffect, useState } from 'react';
import CardListSection from '../components/CardListSection' 
import Navbar from '../components/Navbar'; 
import Header from '../components/HeaderWithBackButton';
import SearchBar from '../components/SearchBar';
import ListLomba from '../lib/listlomba';
import { LombaListData } from '../lib/types';



const LombaPage: React.FC = () => {
  const [search, SetSearch] = useState("");
  const [dataLomba, SetDataLomba] = useState<LombaListData>({ count: 0, lomba: [] });

  useEffect( () => {
    async function InitializeDataLomba() {
      SetDataLomba(await ListLomba(0, 100, "", ""));
    }

    InitializeDataLomba();
  }, [])

  const OnSearch = async () => {
    SetDataLomba(await ListLomba(0, 100, search, ""));
  }
  
  return (
    <main className="flex min-h-screen flex-col bg-[#F6F5F5]">
      <Navbar/>
      <div className="container mx-auto px-12 py-20">
        <Header title="Lomba" />
        <SearchBar setter={SetSearch} callback={OnSearch} />
        <CardListSection list={dataLomba.lomba} type="lomba" />
      </div>
    </main>
  );
};

export default LombaPage;