import React from "react";

const Register = () => {
  return (
    <div className="fromContainer">
      <div className="fromWrapper">
        <span className="logo">wavy wave </span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" />
          <button>Sign up</button>
        </form>
        <p>You do have an account?Login</p>
      </div>
    </div>
  );
};

export default Register;
