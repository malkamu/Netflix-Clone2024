import React from "react";
import "./Header.css";
import netflixlogo from "../../assets/image/Netflixlogo.png/Net2.jpg"
import { FaUser } from "react-icons/fa";
import SearchIcon from "@mui/icons-material/Search";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { IoMdNotifications } from "react-icons/io";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { FaSearch } from "react-icons/fa";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const Header = () => {
  
  return (
    <div className="navbar ">
      <div className="header">
        <div>
          <ul className="app">
            <li>
              <a>
                <img src={netflixlogo} width={"100px"} />
              </a>
            </li>
            <li>Netflix</li>

            <li>Home</li>

            <li>TV Shows</li>

            <li>Movies</li>

            <li>New & Popular</li>

            <li>My List</li>

            <li>Browse by Languages</li>
          </ul>
        </div>

        <div className="Icons">
          <ul>
            <li>
              <FaSearch />
            </li>
            <li>
              <FaUser />
            </li>
            <li>
              <IoMdNotifications />
            </li>
            <li></li>
          </ul>
        </div>
        <div />
      </div>
    </div>
  );
};
export default Header;

// import SearchIcon from "@mui/icons-material/Search";

// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

// import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

// import AccountBoxIcon from "@mui/icons-material/AccountBox";

// https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@450
