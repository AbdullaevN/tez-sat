import React from "react";
import google from "../assets/Group.svg";
import appstore from "../assets/appstore.svg";
import social from "../assets/Group-footer.svg";
import { Link } from "react-router-dom";
import logo from "../assets/web.svg";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="footer__about">
            <div className="footer__block1">
              <h2 className="footer__title">Address</h2>
              <p className="block1__text">
                Tez Sat (Тез Сат) - это сервис бесплатных объявлений
                Кыргызстана.Сервис позволяет подавать бесплатные объявления о
                купле, продаже, аренде, обмене как б/у, так и новых товаров и
                услуг. Продажа авто, домов, квартир, электроники, поиск работы и
                услуг является неотъемлемой частью повседневного бытия.
              </p>
              <div className="nav__logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="footer__block2">
              <h2 className="footer__title">Services</h2>
              <li className="footer__text">
                <a className="footer__text_block2" href="www.google.com">
                  Служба поддержки
                </a>
              </li>
              <li className="footer__text">
                <a className="footer__text_block2" href="www.google.com">
                  Карта сайта
                </a>
              </li>
              <li className="footer__text">
                <a className="footer__text_block2" href="www.google.com">
                  О нас
                </a>
              </li>
              <li className="footer__text">
                <a className="footer__text_block2" href="www.google.com">
                  Помощь
                </a>
              </li>
              <li className="footer__text">
                <a className="footer__text_block2" href="www.google.com">
                  Пользовательские соглашения
                </a>
              </li>
              <li className="footer__copyright">
                <p>© 2021 Все права защищены</p>
              </li>
            </div>
            <div className="footer__block3">
              <h2 className="footer__title">Address</h2>

              <div>
                <img src={google} alt="" />
              </div>
              <div>
                <img src={appstore} alt="" />
              </div>
              <div className="footer__copyright-img">
                <img src={social} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
