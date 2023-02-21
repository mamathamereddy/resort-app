import React from "react";

const Banner = ({ children, tittle, subtitle }) => {
  return (
    <div className="banner">
      <h2>{tittle}</h2>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;
