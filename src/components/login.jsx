import React from "react";
import Input from "./input";

function login() {
  return (
    <form className="form">
      <Input text="username" placeholder="Username" />
      <Input text="password" placeholder="Password" />
      <button type="submit">login</button>
    </form>
  );
}

export default login;
