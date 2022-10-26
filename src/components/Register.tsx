import React from "react";
import Header from "./Header";
import { useForm } from "react-hook-form";
import axios from "axios";

type RegisterInfo = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
};
// const SERVER_URL = "https://app-reciate.herokuapp.com";
const SERVER_URL = "http://localhost:8080";
// const SERVER_URL = process.env.PORT
//   ? "https://app-reciate.herokuapp.com/"
//   : "http://localhost:8080";

const Register = () => {
  const { register, handleSubmit } = useForm<RegisterInfo>();

  const onSubmit = handleSubmit((userData) => {
    // alert(JSON.stringify(data));
    console.log(userData);

    axios.post(`${SERVER_URL}/user/new`, userData);
  });

  return (
    <div className="w-full h-[calc(100vh-60px)]">
      <Header />
      <div className=" h-full  flex justify-center">
        <form
          className="bg-submain w-96 h-4/5 shadow-md pt-6 pb-8 pl-6 pr-8 flex flex-col justify-center content-center self-center rounded"
          onSubmit={onSubmit}
        >
          <label
            className="block text-dark text-lg font-bold mb-2"
            htmlFor="first_name"
          >
            First Name
          </label>
          <input
            {...register("first_name")}
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            type="text"
            id="first_name"
            name="first_name"
            placeholder="Toshiro"
            required
          />
          <label
            className="block text-dark text-lg font-bold mb-2 mt-4"
            htmlFor="last_name"
          >
            Last Name
          </label>
          <input
            {...register("last_name")}
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Mifune"
            required
          />
          <label
            className="block text-dark text-lg font-bold mb-2 mt-4"
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
            required
          />
          <label
            className="block text-dark text-lg font-bold mb-2 mt-4"
            htmlFor="password"
          >
            Password
          </label>
          <input
            {...register("password")}
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            name="password"
            placeholder="Pa$$word!@123"
            required
          />
          <label
            className="block text-dark text-lg font-bold mb-2 mt-4"
            htmlFor="confirm_password"
          >
            Confirm Password
          </label>
          <input
            {...register("confirm_password")}
            className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
            type="password"
            id="confirm_password"
            name="confirm_password"
            placeholder="Pa$$word!@123"
            required
          />
          <input
            className="cursor-pointer w-full bg-dark hover:bg-accentdarker text-main mr-4 py-2 px-4 rounded-sm"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
