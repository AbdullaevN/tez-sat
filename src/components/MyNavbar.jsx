import React from "react";
import logo from "../assets/web.svg";

const MyNavbar = () => {
  return (
    <>
      <header className="header container">
        <div className="nav">
          <div className="nav__logo">
            <img src={logo} alt="" />
          </div>
          <div className="nav__wrap">
            <ul className="nav__list">
              <li>
                <a href="">Для бизнеса </a>
              </li>

              <li>
                <a href="">Блог</a>
              </li>

              <li>
                <a href="">О нас</a>
              </li>

              <li>
                <a href="">Помощь</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header__auth">
          <ul className="header__auth__list">
            <li>
              <a href="">Ru</a>
            </li>
            <li>
              <a href="">Войти</a>
            </li>
            <li>
              <a href="">Регистрация</a>
            </li>
          </ul>
        </div>
        {/* <div className="row-wrap">
            <div className="logo-wrap">
              <span className="logo">LOGO</span>
            </div>
            <div className="nav-wrap">
              <ul className="nav-list">
                <li className="active">
                  <a href="#">About-us</a>
                </li>
                <li>
                  <a href="#">Contact-us</a>
                </li>
                <li className="with-submenu">
                  <a href="#">Blog</a>
                  <div className="submenu">
                    <ul className="submenu-inner">
                      <li>
                        <a href="#">Link1</a>
                      </li>
                      <li>
                        <a href="#">Link2</a>
                      </li>
                      <li>
                        <a href="#">Link3</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="hamburger">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </div> */}
      </header>
    </>
  );
};

export default MyNavbar;
