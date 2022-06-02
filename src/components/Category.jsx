import React from "react";
import electronika from "../assets/electronika.png";
import transport from "../assets/transport.png";
import nedvijimost from "../assets/nedvijimost.png";
import clothes from "../assets/clothes.png";
import home from "../assets/home.png";
import { IoIosArrowDown } from "react-icons/io";

const Category = () => {
  return (
    <div className="category-section container">
      <div>
        <h2>Главные категории</h2>
      </div>
      <div className="category-section-wrap">
        <div className="electronika">
          <img src={electronika} alt="" />
          <span>Электроника</span>
        </div>
        <div className="transport">
          <img src={transport} alt="" />
          <span>Транспорт</span>
        </div>
        <div className="nedvijimost">
          <img src={nedvijimost} alt="" />
          <span>Недвижимость</span>
        </div>
        <div className="clothes">
          <img src={clothes} alt="" />
          <span>Вещи</span>
        </div>
        <div className="home">
          <img src={home} alt="" />
          <span>Всё для дома</span>
        </div>
      </div>
      <div>
        <span style={{ color: "#0051BA" }}>Все категории</span>
        <button className="arrow">
          <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
};

export default Category;
