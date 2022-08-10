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
import { useEffect, useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { Users } from "../types/types";
import { Link } from "react-router-dom";

export default function Header() {
  const [users, setUsers] = useState<Users>([]);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((resp) => resp.json())
      .then((usersFromServer) => setUsers(usersFromServer));
    console.log(users);
  }, []);
  return (
    <header className="header">
      <div className="logo">
        <FaTwitter size={30} />
      </div>
      <ul className="header-list">
        <li className="header-item">
          <Link to={"/home"}>
            <BiHomeCircle size={30} /> Home
          </Link>
        </li>
        <li className="header-item">
          <FaHashtag size={30} /> Explore
        </li>
        <li className="header-item">
          <FaBell size={30} /> Notifications
        </li>
        <li className="header-item">
          <BiEnvelope size={30} /> Message
        </li>
        <li className="header-item">
          <MdBookmarks size={30} /> Bookmarks
        </li>
        <li className="header-item">
          <BsCardList size={30} /> Lists
        </li>
        <li className="header-item">
          <AiOutlineUser size={30} /> Profile
        </li>
        <li className="header-item">
          <CgMoreO size={30} />
          More
        </li>
        <li className="header-item">
          <button>Tweet</button>
        </li>
      </ul>
      <div className="header-profile-container">
        {users.map((user) => (
          <div className="header-profile" key={user.id}>
            <Link to={"profilepage"}>
              <img
                src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
                height={20}
              />
            </Link>
            <div>
              <h3>
                <strong>{user.name}</strong>
              </h3>
              <h3>{user.username}</h3>
            </div>
            <FiMoreHorizontal size={10} />
          </div>
        ))}
      </div>
    </header>
  );
}
