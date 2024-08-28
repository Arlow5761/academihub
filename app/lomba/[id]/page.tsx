"use client";
import {useEffect, useState} from "react";
import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/navigation";
import GetLomba from "@/app/lib/getlomba";
import { LombaData } from "@/app/lib/types";
import ListBookmark from "@/app/lib/listbookmark";

const DetailPage = ( { params } : { params : { id : string } } ) => {
  const [detailData, setDetailedData] = useState<LombaData | null>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleClick = async () => {
    setIsClicked(!isClicked);

    if (!isClicked) {
      await fetch("/api/bookmark/add", {
        method: "POST",
        body: JSON.stringify({type: "lomba", itemID: params.id})
      })
    } else {
      await fetch("/api/bookmark/remove", {
        method: "POST",
        body: JSON.stringify({type: "lomba", itemID: params.id})
      })
    }
  };

  useEffect(() => {
    const process = async () => {
      const data = await GetLomba(params.id);
      setDetailedData(data);

      if ((await fetch("/api/user/profile")).status === 200) {
        setLoggedIn(true);
      } else {
        return;
      }

      const bookmarks = await ListBookmark(0, 100, "", "");
      for (let item of bookmarks.bookmark) {
        if (item.type === "lomba" && item.id == params.id) {
          setIsClicked(true);
          break;
        }
      }
    }

    process();
  }, []);

  return (
    <div className="my-20">
      <Navbar />
      <div className="mx-20">
        <HeaderWithBackButton title="Detail Lomba" iconType="detail"/>
      </div>
      <div className="grid grid-cols-2 mx-40 py-10 gap-5">
        <div>
          <img
            className="max-w-full rounded-2xl"
            src={detailData?.image_link}
            alt={detailData?.image_alt}
          />
        </div>
        <div className="p-4 items-center border border-solid border-gray-300 w-full rounded-2xl shadow-custom">
          <h1 className="mt-2 mb-2 text-3xl text-blue-800 tracking-tight font-extrabold">
            Lomba
          </h1>
          <hr className="mb-2 "></hr>
          <div className="flex justify-end">
            {isLoggedIn && (<button
              className={
                isClicked ? "flex h-10 text-yellow-500 hover:text-yellow-500 " : "flex h-10 text-gray-800 hover:text-yellow-500 "
              }
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
            </button>)}
          </div>

          <p className="mb-2 text-xl  bold text-justify">Tanggal Posting: {detailData?.date_wib}</p>
          <p className="mb-2 text-xl bold text-justify">Penyelenggara: {detailData?.account}</p>
          <p className="mb-2 text-xl bold text-justify">Detail:</p>
          <div className="mb-2 text-xl text-justify" dangerouslySetInnerHTML={{__html:detailData?.caption || ""}} />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
