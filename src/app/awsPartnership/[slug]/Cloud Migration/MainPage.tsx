import React from "react";
import "./cloudmigration.css";
import Migration from "./Migration";
import CloudData from "./CloudData";

function MainPage() {
  return (
    <React.Fragment>
      <Migration />
      <CloudData />
    </React.Fragment>
  );
}

export default MainPage;
