import React, { Suspense, useState } from "react";
import Category from "../components/Category";
// import DbStoreProduct from "../components/DbStoreProduct";
import Footer from "../components/Footer";
import MyNavbar from "../components/MyNavbar";
import Search from "../components/Search";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const SectionCard = React.lazy(() => import("../components/SectionCard"));

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const MainPage = () => {
  let [loading] = useState(true);
  let [color] = useState("#ffffff");
  // const x = 1;
  // COMMENT FOR COMMIT
  return (
    <div>
      {/* <h2>Main Page</h2> */}
      <MyNavbar />
      <Search />
      <Category />

      <Suspense
        fallback={
          <h2
            style={{
              display: "flex",
              justifyConten: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <ClipLoader
              color={color}
              loading={loading}
              css={override}
              size={150}
            />
          </h2>
        }
      >
        <SectionCard />
      </Suspense>

      <Footer />
      {/* <DbStoreProduct /> */}
    </div>
  );
};

export default MainPage;
