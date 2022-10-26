import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const Header = () => {
  return (
    <header className="bg-accent p-2 flex justify-between">
      {localStorage.getItem("JWToken") ? (
        <>
          <Link
            className="bg-dark hover:bg-accentdarker text-main mr-4 py-2 px-4 rounded-sm"
            to="/home"
          >
            Home
          </Link>
          <Logout />
        </>
      ) : (
        <>
          <Link
            className="bg-dark hover:bg-accentdarker text-main mr-4 py-2 px-4 rounded-sm"
            to="/register"
          >
            Register
          </Link>
          <Link
            className="bg-dark hover:bg-accentdarker text-main mr-4 py-2 px-4 rounded-sm"
            to="/login"
          >
            Login
          </Link>
        </>
      )}
    </header>
  );
};

export default Header;
