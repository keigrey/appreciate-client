import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const Header = () => {
  return (
    <header>
      <h1>HEADER</h1>
      {localStorage.getItem("JWToken") ? (
        <>
          <Link to="/home">Home</Link>
          <Logout />
        </>
      ) : (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </header>
  );
};

export default Header;
