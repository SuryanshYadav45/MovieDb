import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { TbSearch } from "react-icons/tb";
import Search from "../Search/Search";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showSearch, setshowSearch] = useState(false);

  const toggleView = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="navbar">
        <Link to="/">MovieDB</Link>

        <div className="wrapper">
          <TbSearch className="searchbtn" onClick={() => setshowSearch(!showSearch)} />
          {!toggle ? (
            <GiHamburgerMenu className="menuIcon" onClick={toggleView} />
          ) : (
            <AiOutlineClose className="menuIcon" onClick={toggleView} />
          )}
          <div className="navbarright">
            <ul>
              <li>
                <a href="/popular">popular</a>
              </li>
              <li>
                <a href="/toprated">top rated</a>
              </li>
              <li>
                <a href="/upcoming">upcoming</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {toggle && (
        <div className="submenu">
          <ul>
            <li>
              <a href="/popular">popular</a>
            </li>
            <li>
              <a href="/toprated">top rated</a>
            </li>
            <li>
              <a href="/upcoming">upcoming</a>
            </li>
          </ul>
        </div>
      )}
      {showSearch && <Search  setshowSearch={setshowSearch} />}
    </>
  );
};

export default Navbar;
