import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "82vh" }}>{children}</div>
      <Footer />
    </>
  );
};

export default Main;
