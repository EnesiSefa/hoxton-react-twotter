import { useState, useEffect } from "react";
import {
  AiOutlineFileGif,
  AiFillSchedule,
  AiOutlineHeart,
} from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { BsStars, BsEmojiSmile } from "react-icons/bs";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { FiMoreHorizontal, FiShare } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { MdOutlinePermMedia } from "react-icons/md";
import { Link } from "react-router-dom";
import { Users } from "../types/types";

export default function Main() {
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
        <div className="top-main-div">
          <div className="form-header">
            <h2>Home</h2>
            <BsStars />
          </div>
          <div className="form-container">
            <img
              src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
              height={20}
            />
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
              action=""
              className="form"
            >
              <input
                type="text"
                className="input"
                placeholder="What's happening?"
              />
              <ul className="form-icons-list">
                <li className="form-icon">
                  <MdOutlinePermMedia />
                </li>
                <li className="form-icon">
                  <AiOutlineFileGif />
                </li>
                <li className="form-icon">
                  <BiPoll />
                </li>
                <li className="form-icon">
                  <BsEmojiSmile />
                </li>
                <li className="form-icon">
                  <AiFillSchedule />
                </li>
                <li className="form-icon">
                  <GrLocation />
                </li>
                <li className="form-icon">
                  <button>Tweet</button>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div>show 300 tweets</div>
        <ul className="posts-list">
          {users.map((user) => (
            <Link to={"singletweetpage"}>
              {" "}
              <li className="post-item">
                <div className="profile-pic">
                  <img
                    src="https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                    height={20}
                  />
                </div>
                <div className="post-container">
                  <div className="post-info">
                    <div className="post-info__names__and__more">
                      <h3>{user.name}</h3>
                      <span>{user.username}</span>
                      <FiMoreHorizontal size={10} />
                    </div>
                    <p>{user.description}</p>
                  </div>
                  <div className="post-pic">
                    <img
                      src="https://media.istockphoto.com/photos/villefranche-on-sea-in-evening-picture-id1145618475?k=20&m=1145618475&s=612x612&w=0&h=_mC6OZt_eWENYUAZz3tLCBTU23uvx5beulDEZHFLsxI="
                      alt=""
                      height={100}
                    />
                  </div>
                  <div className="post-interactions">
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
            </Link>
          ))}
        </ul>
      </div>

      <div className="R-menu">right-menu</div>
    </main>
  );
}
