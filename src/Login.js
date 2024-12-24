import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./App";
import "./assets/css/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login logic
    // For simplicity, we'll just redirect to the home page
    setIsAuthenticated(true);
    navigate("/home");
  };

  return (
    <div className="wrapper">
      <div className="logo">
        <img src="#" alt="logo" />
      </div>
      <div className="text-center mt-4 name">Login</div>
      <form className="p-3 mt-3">
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user" />
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Username"
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key" />
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
          />
        </div>
        <button className="btn mt-3">Login</button>
      </form>
      <div className="text-center fs-6">
        <a href="#">Forget password?</a> or <a href="#">Sign up</a>
      </div>
    </div>
  );
};
export default Login;
