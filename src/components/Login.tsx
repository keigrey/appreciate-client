import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" />
      <label htmlFor="password">Password</label>
      <input type="text" id="password" name="password" />
      <input type="submit" value="Login" />
    </div>
  );
};

export default Login;
