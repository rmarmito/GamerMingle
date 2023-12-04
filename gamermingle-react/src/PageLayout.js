import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = ({ children, isAuthenticated }) => {
  return (
    <div>
      <Header isAuthenticated={isAuthenticated} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
