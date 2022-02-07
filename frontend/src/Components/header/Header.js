import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="header__logo">
              <Link to={"/"}>
                <img src={require("./logo.png")}></img>
              </Link>
            </div>
          </div>
          <div className="col-lg-8"></div>
          <div className="col-lg-2">
            <div className="header__nav">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li>
                    <Link to={"/Community2"} >자유게시판</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div id="mobile-menu-wrap"></div>
      </div>
    </header>
  );
};

export default Header;
