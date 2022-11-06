import React from "react";
import one from "../img/attach.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Wavy wave</span>
      <div className="user">
        <img src={one} alt="" />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
