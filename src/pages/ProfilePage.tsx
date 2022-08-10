import { useEffect, useState } from "react";

import { BiEnvelope, BiHomeCircle, BiPoll } from "react-icons/bi";
import {
  FaBell,
  FaHashtag,
  FaRegComment,
  FaRetweet,
  FaTwitter,
} from "react-icons/fa";
import { BsCalendar, BsCardList, BsEmojiSmile, BsStars } from "react-icons/bs";
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

import { User, Users } from "../types/types";
import { Link } from "react-router-dom";

function ProfilePage() {
  const [users, setUsers] = useState<Users>([]);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((resp) => resp.json())
      .then((usersFromServer) => setUsers(usersFromServer));
    console.log(users);
  }, []);
  return (
    <main className="main">
      <div className="home">
        <div className="top-profile-page">
          <div className="background-profile-pic"></div>
          <div className="profile-informations">
            <div className="profile-page-pic">
              <img
                src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
                height={80}
              />
              <button className="edit-profile-button">Edit profile</button>
            </div>
            <div className="profile-name-username">
              <h3>enesi</h3>
              <p>enesiDev</p>
            </div>
            <div className="bio">
              <h2>Hello World</h2>
            </div>
            <div className="joined">
              <h3>
                <BsCalendar /> Joined August 2009
              </h3>
            </div>
            <div className="following-followers">
              <div>
                <h3>535</h3>
                <span>following</span>
              </div>
              <div>
                <h3>339.5K</h3>
                <span>followers</span>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-page-menu">
          <h4>Tweets</h4>
          <h4>Tweets{`&`}replies</h4>
          <h4>Media</h4>
          <h4>Likes</h4>
        </div>
        <div className="profile-page-feed">
          <ul className="profile-page-tweets">
            {users.map((user) => (
              <li className="profile-page-tweet">
                <div className="tweet-left-side">
                  <img
                    src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                    height={20}
                  />
                </div>
                <div className="tweet-right-side">
                  <div className="tweet-name-username-date">
                    <h3>{user.name}</h3>
                    <p>{user.username}</p>
                  </div>
                  <div>
                    <p>{user.description}</p>
                  </div>
                  <div className="profile-page-tweets__intercations">
                    <div>
                      <FaRegComment />
                      <span>23</span>
                    </div>
                    <div>
                      <FaRetweet />
                      <span>14</span>
                    </div>
                    <div>
                      <AiOutlineHeart />
                      <span>34</span>
                    </div>
                    <div>
                      <FiShare />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="R-menu">right-menu</div>
    </main>
  );
}

export default ProfilePage;
