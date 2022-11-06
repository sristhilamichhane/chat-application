import React from "react";

const Login = () => {
  return (
    <div className="fromContainer">
      <div className="fromWrapper">
        <span className="logo">wavy wave </span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Sign in</button>
        </form>
        <p>You dont have an account?Register</p>
      </div>
    </div>
  );
};

export default Login;
