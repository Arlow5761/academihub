'use client'

import React, { useEffect, useState } from 'react';
import CardListSection from '../components/CardListSection' 
import Navbar from '../components/Navbar'; 
import Header from '../components/HeaderWithBackButton';
import SearchBar from '../components/SearchBar';
import { BookmarkListData, } from '../lib/types';
import ListBookmark from '../lib/listbookmark';


const BookmarkPage: React.FC = () => {
  const [search, SetSearch] = useState("");
  const [dataBookmark, SetDataBookmark] = useState<BookmarkListData>({ count: 0, bookmark: [] });

  useEffect(() => {
    async function InitializeBookmark() {
      SetDataBookmark(await ListBookmark(0, 100, "", ""));
    }

    InitializeBookmark();
  }, [])

  const OnSearch = async () => {
    SetDataBookmark(await ListBookmark(0, 100, search, ""));
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#F6F5F5]">
      <Navbar/>
      <div className="container mx-auto px-12 py-24">
        <Header title="Saved Posts" iconType='bookmark' />
        <SearchBar setter={SetSearch} callback={OnSearch} />
        <CardListSection list={dataBookmark.bookmark} type="bookmark" />
      </div>
    </main>
  );
};

export default BookmarkPage;