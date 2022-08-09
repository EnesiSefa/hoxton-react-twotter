import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { BiEnvelope, BiHomeCircle, BiPoll } from "react-icons/bi";
import {
  FaBell,
  FaHashtag,
  FaRegComment,
  FaRetweet,
  FaTwitter,
} from "react-icons/fa";
import { BsCardList, BsEmojiSmile, BsStars } from "react-icons/bs";
import { MdBookmarks, MdOutlinePermMedia } from "react-icons/md";
import {
  AiFillSchedule,
  AiOutlineFileGif,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";
import { CgMoreO } from "react-icons/cg";
import { FiMoreHorizontal, FiShare } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { User, Users } from "./types/types";
import "./App.css";
import Header from "./components/header";
import Main from "./components/Main";
import SingleTweetPage from "./pages/SingleTweetPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Main/>}/>
        <Route path="/singletweetpage" element={<SingleTweetPage />} />
        
      </Routes>
      
    </div>
  );
}

export default App;
