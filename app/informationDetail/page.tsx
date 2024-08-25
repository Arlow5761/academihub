"use client";
import {useState} from "react";
import HeaderWithBackButton from "../components/HeaderWithBackButton";
import Navbar from "../components/Navbar";

const DetailPage = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="my-20">
      <Navbar />
      <div className="mx-20">
        <HeaderWithBackButton title="Detail Lomba/Beasiswa/Seminar" />
      </div>
      <div className="grid grid-cols-2 mx-40 py-10 gap-5">
        <div>
          <img
            className="max-w-full rounded-2xl"
            src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
            alt=""
          />
        </div>
        <div className="p-4 items-center border border-solid border-gray-300 w-full rounded-2xl shadow-custom">
          <h1 className="mt-2 mb-2 text-3xl text-blue-800 tracking-tight font-extrabold">
            Nama Lomba/Beasiswa/Seminar
          </h1>
          <hr className="mb-2 "></hr>
          <div className="flex justify-end">
            <button
              className={`flex h-10 text-gray-800 dark:text-white hover:text-yellow-500 ${
                isClicked ? "text-yellow-500" : ""
              }`}
              onClick={handleClick}
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z"
                />
              </svg>
              <span className="mt-0.5">Simpan</span>
            </button>
          </div>

          <p className="mb-2 text-xl  bold text-justify">Tanggal Posting:</p>
          <p className="mb-2 text-xl bold text-justify">Penyelenggara:</p>
          <p className="mb-2 text-xl bold text-justify">Detail:</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
