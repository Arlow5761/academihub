'use client'

import React, { useEffect, useState } from 'react';
import CardListSection from '../components/CardListSection' 
import Navbar from '../components/Navbar'; 
import Header from '../components/HeaderWithBackButton';
import SearchBar from '../components/SearchBar';
import ListBeasiswa from '../lib/listbeasiswa';
import { BeasiswaListData } from '../lib/types';


const BeasiswaPage: React.FC = () => {
  const [search, SetSearch] = useState("");
  const [dataBeasiswa, SetDataBeasiswa] = useState<BeasiswaListData>({ count: 0, beasiswa: [] });

  useEffect( () => {
    async function InitializeDataLomba() {
      SetDataBeasiswa(await ListBeasiswa(0, 100, "", ""));
    }

    InitializeDataLomba();
  }, [])

  const OnSearch = async () => {
    SetDataBeasiswa(await ListBeasiswa(0, 100, search, ""));
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#F6F5F5]">
      <Navbar/>
      <div className="container mx-auto px-12 py-20">
        <Header title="Beasiswa" />
        <SearchBar setter={SetSearch} callback={OnSearch} />
        <CardListSection list={dataBeasiswa.beasiswa} type="beasiswa" />
      </div>
    </main>
  );
};

export default BeasiswaPage;