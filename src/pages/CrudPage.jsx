import React from "react";
import AddComponent from "../components/AddComponents";
import DbFirestore from "../components/DbFirestore";

const CrudPage = () => {
  return (
    <div className="App container">
      {" "}
      <AddComponent />
      <DbFirestore />
    </div>
  );
};

export default CrudPage;
