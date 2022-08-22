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

const SERVER_URL = process.env.PORT ? "heroku" : "http://localhost:8080";

const Register = () => {
  const { register, handleSubmit } = useForm<RegisterInfo>();

  const onSubmit = handleSubmit((data) => {
    // alert(JSON.stringify(data));
    console.log(data);

    axios.post(`${SERVER_URL}/entry`, data);
  });

  return (
    <div>
      <Header />
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="first_name">First Name</label>
        <input
          {...register("first_name")}
          type="text"
          id="first_name"
          name="first_name"
        />
        <label htmlFor="last_name">Last Name</label>
        <input
          {...register("last_name")}
          type="text"
          id="last_name"
          name="last_name"
        />
        <label htmlFor="email">Email</label>
        <input {...register("email")} type="text" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input
          {...register("password")}
          type="text"
          id="password"
          name="password"
        />
        <label htmlFor="confirm_password">Confirm Password</label>
        <input
          {...register("confirm_password")}
          type="text"
          id="confirm_password"
          name="confirm_password"
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
