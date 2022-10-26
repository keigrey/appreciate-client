import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <button
      className="text-accentdarker hover:text-main py-2 px-4 rounded-sm"
      onClick={logout}
    >
      Logout
    </button>
  );
};

export default Logout;
