import React from "react";
import "./Navbar.css";

const Navbar = ({ className }) => {
  return (
    <div className={`${className} nav-component`}>
      <p>home</p>
      <p>servies</p>
      <p>news</p>
      <p>blog</p>
      <p>contact</p>
    </div>
  );
};

export default Navbar;
