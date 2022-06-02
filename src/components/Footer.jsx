import React from "react";
import google from "../assets/Group.svg";
import appstore from "../assets/appstore.svg";

const Footer = () => {
  return (
    <>
      {/* <div classNameName="footer-section-info">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div></div>
      <div className="footer-section-social">
        <div></div>
        <div></div>
        <div></div>
      </div> */}
      <section class="footer">
        <div class="container">
          <div class="footer__about">
            <div class="footer__block1">
              <h2 class="footer__title">Address</h2>
              <p class="block1__text">
                Tez Sat (Тез Сат) - это сервис бесплатных объявлений
                Кыргызстана.Сервис позволяет подавать бесплатные объявления о
                купле, продаже, аренде, обмене как б/у, так и новых товаров и
                услуг. Продажа авто, домов, квартир, электроники, поиск работы и
                услуг является неотъемлемой частью повседневного бытия.
              </p>
              <p>Copyright 2018 CloudBudget</p>
            </div>
            <div class="footer__block2">
              <h2 class="footer__title">Services</h2>
              <li class="footer__text">
                <a class="footer__text_block2" href="#">
                  Служба поддержки
                </a>
              </li>
              <li class="footer__text">
                <a class="footer__text_block2" href="#">
                  Карта сайта
                </a>
              </li>
              <li class="footer__text">
                <a class="footer__text_block2" href="#">
                  О нас
                </a>
              </li>
              <li class="footer__text">
                <a class="footer__text_block2" href="#">
                  Помощь
                </a>
              </li>
              <li class="footer__text">
                <a class="footer__text_block2" href="#">
                  Пользовательские соглашения
                </a>
              </li>
            </div>
            <div class="footer__block3">
              <h2 class="footer__title">Address</h2>

              <div>
                <img src={google} alt="" />
              </div>
              <div>
                <img src={appstore} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
