import React, { useState } from "react";
// import { Artistsection } from "../../components/Artistsection";
import Header from "../../components/Header";
import SongList from "../../components/SongList/index.jsx";
import Sidebar from "../../components/Sidebar";
import "./Home.css";
import { Footer } from "../../components/footer";
export const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="min-h-screen text-gray-300">
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="bg-custom-section pt-28 md:pl-72 p-8">
        <SongList></SongList>
        <SongList></SongList>
        <SongList></SongList>
        <SongList></SongList>
        <Footer></Footer>
      </div>
    </div>
  );
};
