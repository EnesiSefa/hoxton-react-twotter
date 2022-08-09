import { useState } from "react";
import { MdCode } from "react-icons/md";
import { BiEnvelope, BiHomeCircle } from "react-icons/bi";
import { FaBell, FaHashtag, FaTwitter } from "react-icons/fa";
import { BsCardList } from "react-icons/bs";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div>
          <FaTwitter />
        </div>
        <ul className="header-list">
          <li className="header-item">
            <BiHomeCircle />
          </li>
          <li className="header-item">
            <FaHashtag />
          </li>
          <li className="header-item">
            <FaBell />
          </li>
          <li className="header-item">
            <BiEnvelope />
          </li>
          <li className="header-item"></li>
          <li className="header-item">
            <BsCardList />
          </li>
          <li className="header-item">Profile</li>
          <li className="header-item">More</li>
          <li className="header-item">
            <button>Tweet</button>
          </li>
        </ul>
        <div></div>
      </header>
      <main className="main">
        <div className="home">
          <h1>Home</h1>
          <div>
            <img src="" alt="" />
          </div>
          <form action="" className="form">
            <input
              type="text"
              className="input"
              placeholder="What's happening?"
            />
            <ul className="form-icons-list">
              <li className="form-icon">media</li>
              <li className="form-icon">Gif</li>
              <li className="form-icon">Poll</li>
              <li className="form-icon">Emoji</li>
              <li className="form-icon">Schedule</li>
              <li className="form-icon">Location</li>
              <li className="form-icon">
                <button>Tweet</button>
              </li>
            </ul>
          </form>

          <ul className="posts-list">
            <li className="post-item">
              <img src="" alt="" />
              <div>
                <h3></h3>
                <span></span>
              </div>
            </li>
          </ul>
        </div>

        <div className="R-menu">right-menu</div>
      </main>
    </div>
  );
}

export default App;
