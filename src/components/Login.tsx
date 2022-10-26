import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

type LoginInfo = {
  email: string;
  password: string;
};
// const SERVER_URL = "https://app-reciate.herokuapp.com";
const SERVER_URL = "http://localhost:8080";
// const SERVER_URL = process.env.PORT
//   ? "https://app-reciate.herokuapp.com"
//   : "http://localhost:8080";

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
    <div className="w-full h-[calc(100vh-60px)]">
      <Header />
      <div className=" h-full  flex justify-center">
        <form
          className="bg-submain w-96 h-2/5 shadow-md pt-6 pb-8 pl-6 pr-8 flex flex-col justify-center content-center self-center rounded"
          onSubmit={onSubmit}
        >
          <label
            className="block text-dark text-lg font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            {...register("email")}
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            type="text"
            id="email"
            name="email"
            placeholder="example@example.com"
          />
          <label
            className="block text-dark text-lg font-bold mb-2 mt-4"
            htmlFor="password"
          >
            Password
          </label>
          <input
            {...register("password")}
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
            type="password"
            id="password"
            name="password"
            placeholder="*********"
          />
          <input
            className="cursor-pointer w-full bg-dark hover:bg-accentdarker text-main mr-4 py-2 px-4 rounded-sm"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
