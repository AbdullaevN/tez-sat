import React from "react";
import Category from "../components/Category";
// import DbStoreProduct from "../components/DbStoreProduct";
import Footer from "../components/Footer";
import MyNavbar from "../components/MyNavbar";
import Search from "../components/Search";
import SectionCard from "../components/SectionCard";

const MainPage = () => {
  // const x = 1;
  return (
    <div>
      {/* <h2>Main Page</h2> */}
      <MyNavbar />
      <Search />
      <Category />
      <SectionCard />
      <Footer />
      {/* <DbStoreProduct /> */}
    </div>
  );
};

export default MainPage;
