import React from "react";

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <label htmlFor="first_name">First Name</label>
      <input type="text" id="first_name" name="first_name" />
      <label htmlFor="last_name">Last Name</label>
      <input type="text" id="last_name" name="last_name" />
      <label htmlFor="email">Email</label>
      <input type="text" id="email" name="email" />
      <label htmlFor="password">Password</label>
      <input type="text" id="password" name="password" />
      <label htmlFor="confirm_password">Confirm Password</label>
      <input type="text" id="confirm_password" name="confirm_password" />
      <input type="submit" value="Register" />
    </div>
  );
};

export default Register;
