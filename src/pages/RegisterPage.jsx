import SignUp from "../components/SignUp";
import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div>
      <h2>Register </h2>
      <SignUp />
      <p>
        Already have an account?
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
