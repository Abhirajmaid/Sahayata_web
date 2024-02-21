import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const PageNotFound = () => {
  return (
    <div className="page">
      <div className="page_container">
        <h1>404 | PAGE NOT FOUND </h1>
        <Link to="/">
          <span>Go to Home</span>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
