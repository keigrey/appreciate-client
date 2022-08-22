import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <h1>Login</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          navigate("/home");
        }}
      >
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" name="password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
