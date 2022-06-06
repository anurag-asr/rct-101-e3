import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const { login } = useContext(AuthContext);

  return (
    <div>
       <h2>Login</h2>
      <input data-cy="login-email" />
      <br />
      <input data-cy="login-password" />
      <br />
      <button data-cy="login-submit" onClick={login}>Login</button>
      
    </div>
  );
};

export default Login;