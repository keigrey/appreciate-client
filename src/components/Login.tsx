import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

type LoginInfo = {
  email: string;
  password: string;
};

const SERVER_URL = process.env.PORT
  ? "https://app-reciate.herokuapp.com"
  : "http://localhost:8080";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginInfo>();

  const onSubmit = handleSubmit(async (data) => {
    // alert(JSON.stringify(data));
    // console.log(data);

    await axios
      .post(`${SERVER_URL}/user/login`, data)
      .then((response) => {
        const accessToken = response.data.accessToken;

        localStorage.setItem("JWToken", accessToken);

        if (accessToken) {
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
