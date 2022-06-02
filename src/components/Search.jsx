import React from "react";

const Search = () => {
  return (
    <div className="search-section">
      <div className="search">
        <input type="search" name="q" placeholder="Поиск..." />
        <input type="submit" value="Найти" />
      </div>
      <button className="search-section_ad">Подать объявление</button>
    </div>
  );
};

export default Search;
