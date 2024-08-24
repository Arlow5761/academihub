"use client";
import { useState } from "react";

const Home = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <main className="flex flex-col items-center bg-black min-h-screen">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative w-full max-w-md bg-white p-6 rounded-lg">
          <p>Current Password</p>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="yourcurrentpasshere"
              className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
          <p className="mt-4">New Password</p>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="yournewpasshere"
              className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
          <div className="flex justify-between items-center mt-4 font-bold rounded">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 p-2 pr-2 rounded text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
