import React from "react";
import "../components/Navbar.scss";

export const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="navbar-inner">
        <div className="logo">
          <img
            src={require(`../logo/Monogram-HM-Logo-Design-by-Greenlines-Studios-580x387.jpg`)}
            alt=""
          />
        </div>
        <div className="app-name">E-commerce web app</div>
        <div className="cart">
          <img src={require(`../logo/Ecommerce_RTE-03-512.png`)} alt="" />
        </div>
      </div>
    </div>
  );
};
