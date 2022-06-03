import React from "react";
import Category from "../components/Category";
import Footer from "../components/Footer";
import MyNavbar from "../components/MyNavbar";
import Search from "../components/Search";
import SectionCard from "../components/SectionCard";

const MainPage = () => {
  // const x = 1;
  return (
    <div>
      <MyNavbar />
      <Search />
      <Category />
      <SectionCard />
      <Footer />
      <h2>Main Page</h2>
    </div>
  );
};

export default MainPage;
