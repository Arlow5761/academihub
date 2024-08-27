"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter(); // Initialize router

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      // Parse the status from the response headers
      const status = response.headers.get("status");

      if (response.status === 200) {
        // Handle successful registration here
        router.push('/login');
      } else {
        // Handle failure by showing an error message
        setError('Registration failed. Username or password may already exist.');
      }
    } catch (err) {
      console.error('An unexpected error occurred:', err);
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <main className="flex flex-row items-stretch bg-white min-h-screen">
      {/* Header with your name */}
      <header className="bg-white p-4 w-0">
        <div className="text-left text-4xl font-bold text-p-blue ml-4 font-raleway">
          AcademiHub
        </div>
      </header>
      
      {/* Left section for the registration form */}
      <div className="flex items-center justify-center w-2/3 min-h-screen">
        <div className="relative w-full max-w-md bg-white p-6 rounded-lg border border-gray-400 shadow-lg">
          <p className='text-center text-4xl font-bold text-p-blue'>Register</p>
          
          <p className='mt-4 text-p-dark-blue'>Username</p>
          <input 
            type="text" 
            placeholder="youruserhere" 
            className="w-full pl-4 pr-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          
          <p className="mt-4 text-p-dark-blue">Password</p>
          <div className="relative">
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="yourpasshere"
              className="w-full pl-4 pr-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <button 
              type="submit" 
              className="w-full bg-p-orange p-2 pr-2 rounded text-xl text-white"
              onClick={handleRegister}
            >
              Register
            </button>
          </div>

          {error && <p className='text-red-500 text-center mt-4'>{error}</p>}

          <p className='text-p-gray-shaded text-center mt-4'>or</p>
          <p className='mt-4 text-center text-p-dark-blue'>Already have an account? <a href='/login' className='text-p-orange'>Login</a></p>
        
        </div>
      </div>
      
      {/* Right section with background */}
      <div className="w-[811px] min-h-screen bg-p-blue">
        {/* Empty content */}
      </div>
    </main>
  );
};

export default Home;
