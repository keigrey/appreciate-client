import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type LoginInfo = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginInfo>();

  const onSubmit = handleSubmit((data) => {
    // alert(JSON.stringify(data));
    console.log(data);
  });

  return (
    <div>
      <Header />
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input {...register("email")} type="text" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input
          {...register("password")}
          type="text"
          id="password"
          name="password"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
