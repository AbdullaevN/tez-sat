import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/web.svg";

const MyNavbar = () => {
  return (
    <>
      <header className="header container">
        <div className="nav">
          <div className="nav__logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="nav__wrap">
            <ul className="nav__list" id="nav">
              <li>
                <a href="www.google.com">Для бизнеса </a>
              </li>

              <li>
                <a href="www.google.com">Блог</a>
              </li>

              <li>
                <a href="www.google.com">О нас</a>
              </li>

              <li>
                <a href="www.google.com">Помощь</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header__auth">
          <ul className="header__auth__list">
            <li>
              <a href="www.google.com">Ru</a>
            </li>
            <li>
              <Link to={"/sigin"}>
                <button style={{ border: "0" }}>Войти</button>
              </Link>
            </li>
            <li>
              <a href="www.google.com">Регистрация</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default MyNavbar;
