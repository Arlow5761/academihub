import React from "react";
import Navbar from "./landingPage/component/Navbar";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const LandingPage = () => {

  if (cookies().has("session")) {
    redirect("/homepage");
  }

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 mx-40 my-40 gap-5">
        <h2 className="text-[#1b367a] text-left text-5xl font-bold mt-8 px-4">
          {" "}
          Cari Informasi Lomba,
          <br /> Beasiswa, dan Seminar
          <br /> Lebih Simpel dengan
          <br />
          <span className="text-[#EE6F57]"> AcademiHub! </span>
          <br />
          <span className="text-[#274eaf] text-2xl">
            Telusuri, Simpan, dan Dapatkan Notifikasi
            <span className="block">dengan mudah!</span>
          </span>
          <hr className="my-10" />
          <button className="border-2 border-orange-500 bg-orange-500 text-xl font-semibold text-white py-2 px-10 rounded-full hover:bg-white hover:text-orange-500">
            <Link href={"/login"}>Login</Link>
          </button>
          <span className="text-blue-800 text-xl mx-6">atau</span>
          <button className="border-2 border-orange-500 bg-white text-orange-500 text-xl font-semibold py-2 px-10 rounded-full hover:bg-orange-500 hover:text-white">
            <Link href={"/homepage"}>Lanjutkan tanpa akun</Link>
          </button>
        </h2>

        <div className="flex justify-center items-center ">
          <img
            className=" rounded-2xl"
            src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp"
            alt="landingPage"
            width={450}
            height={450}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
