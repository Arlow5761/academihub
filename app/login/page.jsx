"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.status === 200) {
        router.push('/homepage')
      } else {
        setError('Login failed. Please check your username and password.');
      }
    } catch (err) {
      console.error('An unexpected error occurred:', err);
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <main className="flex flex-col md:flex-row bg-white min-h-screen">
      <header className="bg-white p-4 w-full md:w-0">
        <div className="text-left text-4xl font-bold text-p-blue ml-4 font-raleway">
          AcademiHub
        </div>
      </header>

      <div className="flex items-center justify-center w-full min-h-screen">
        <form onSubmit={handleLogin} className="relative w-full max-w-md bg-white p-6 rounded-lg border border-gray-400 shadow-lg">
          <p className='text-center text-4xl font-bold text-p-blue'>Login</p>
          <p className='mt-4 text-p-dark-blue'>Username</p>
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="youruserhere" 
            className="w-full pl-4 pr-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-p-blue focus:border-transparent"
          />
          <p className="mt-4 text-p-dark-blue">Password</p>
          <div className="relative">
            <input
              type={passwordVisible ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="yourpasshere"
              className="w-full pl-4 pr-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-p-blue focus:border-transparent"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
              {passwordVisible ? 'Hide' : 'Show'}
            </button>
          </div>
          {error && <p className="mt-4 text-red-500">{error}</p>}
          <div className="flex justify-between items-center mt-4 font-bold">
            <button type="submit" className="w-full bg-p-orange p-2 pr-2 rounded text-xl text-white">
              Login
            </button>
          </div>
          <p className='text-p-gray-shaded text-center mt-4'>atau</p>
          <p className='mt-4 text-center text-p-dark-blue'>
            Belum mempunyai akun? <a href='/register' className='text-p-orange'>Buat Akun</a>
          </p>
        </form>
      </div>
      <div className="hidden md:block w-[811px] min-h-screen bg-p-blue">
      </div>
    </main>
  );
};

export default Home;