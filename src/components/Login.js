import React from "react";

function Login({ handleLogin }) {
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Username"
        required
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        required
      />

      <br /><br />

      <button type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;