import React, { Suspense } from "react";
import { PacmanLoader } from "react-spinners";
import MyNavbar from "../components/MyNavbar";

const AddComponent = React.lazy(() => import("../components/AddComponents"));
const DbFirestore = React.lazy(() => import("../components/DbFirestore"));

const CrudPage = () => {
  return (
    <div className="App container">
      <MyNavbar />{" "}
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
            <PacmanLoader
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "500px",
                height: "500px",
              }}
            />
          </h2>
        }
      >
        <AddComponent />
        <DbFirestore />
      </Suspense>
    </div>
  );
};

export default CrudPage;
