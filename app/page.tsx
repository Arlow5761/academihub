"use client";
import { useState } from 'react';

const Home = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <main className="flex flex-row items-stretch bg-white min-h-screen">
      {/* Header with your name */}
      <header className="bg-white p-4 w-0">
        <div className="text-left text-4xl font-bold text-p-blue ml-4 font-raleway">
          AcademiHub
        </div>
      </header>


      {/* Bagian kiri untuk login form */}
      <div className="flex items-center justify-center w-2/3 min-h-screen">
        <div className="relative w-full max-w-md bg-white p-6 rounded-lg border border-gray-400 shadow-lg">
          <p className='text-center text-4xl font-bold text-p-blue'>Login</p>
          <p className='mt-4 text-p-dark-blue'>Username</p>
          <input 
            type="text" 
            placeholder="youruserhere" 
            className="w-full pl-4 pr-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="mt-4 text-p-dark-blue">Password</p>
          <div className="relative">
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="yourpasshere"
              className="w-full pl-4 pr-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
              {passwordVisible ? 'Hide' : 'Show'}
            </button>
          </div>
          <div className="flex justify-between items-center mt-4 font-bold">
            <button type="submit" className="w-full bg-p-orange p-2 pr-2 rounded text-xl text-white">
              Login
            </button>
          </div>
          <p className='text-p-gray-shaded text-center mt-4'>atau</p>
          <p className='mt-4 text-center text-p-dark-blue'>Belum mempunyai akun? <a href='/register' className='text-p-orange'>Buat Akun</a></p>
        </div>
      </div>
      
      {/* Bagian kanan dengan background putih */}
      <div className="w-[811px] min-h-screen bg-p-blue">
        {/* Konten kosong */}
      </div>
    </main>
  )
}

export default Home;

