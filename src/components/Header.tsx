import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>HEADER</h1>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/home">Home</Link>
    </header>
  );
};

export default Header;
