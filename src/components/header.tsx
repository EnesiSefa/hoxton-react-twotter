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
    return(
        <header className="header">
        <div className="logo">
          <FaTwitter size={30} />
        </div>
        <ul className="header-list">
          <li className="header-item">
            <Link to={"/home"}><BiHomeCircle size={30} /></Link>
          </li>
          <li className="header-item">
            <FaHashtag size={30} />
          </li>
          <li className="header-item">
            <FaBell size={30} />
          </li>
          <li className="header-item">
            <BiEnvelope size={30} />
          </li>
          <li className="header-item">
            <MdBookmarks size={30} />
          </li>
          <li className="header-item">
            <BsCardList size={30} />
          </li>
          <li className="header-item">
            <AiOutlineUser size={30} />
          </li>
          <li className="header-item">
            <CgMoreO size={30} />
          </li>
          <li className="header-item">
            <button>Tweet</button>
          </li>
        </ul>
        <ul>
          {users.map((user) => (
            <li className="header-item" key={user.id}>
              <img src={user.profilePic} alt="" />
              <h3>
                <strong>{user.name}</strong>
              </h3>
              <h3>{user.username}</h3>
              <FiMoreHorizontal size={10} />
            </li>
          ))}
        </ul>
      </header>
    )
}
