import React from "react";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className="search-section">
      <div className="search">
        <input type="search" name="q" placeholder="Поиск..." />
        <input type="submit" value="Найти" />
      </div>
      <Link to="/crud" className="search-section_ad">
        <button className="search-section_ad">Подать объявление</button>
      </Link>
    </div>
  );
};

export default Search;
