import React from "react";
import "./CSS/LoginSignup.css";
import Mybackground from '../Components/Assests/loginbg.jpg'
const LoginSignup = () => {
  return (
    <div className="loginsignup" style={{ backgroundImage: `url(${Mybackground})` }}>
      <div class="loginForm">
        <div class="login-header">
          <h3>Welcome Back</h3>
          <p>Please enter your details.</p>
        </div>

        <div class="login-details">
          <label>E-mail</label>
          <input type="text" placeholder="Enter your e-mail" />
        </div>

        <div class="login-details">
          <label>Password</label>
          <input type="password" placeholder="********" />
        </div>
        <div class="login-remember">
          <div>
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
          <div>
            <p>Forgot your password?</p>
          </div>
        </div>
        <div class="login-confirm">
          <input type="button" value="Log In" />

          <p>
            Don't have an account? <span>Register here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
