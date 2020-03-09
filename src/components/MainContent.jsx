import React from "react";
import { Content } from "../components/Content";
import { Cart } from "../components/Cart";

export const MainContent = () => {
  return (
    <div className="main-content">
      <Content />
      <Cart />
    </div>
  );
};
