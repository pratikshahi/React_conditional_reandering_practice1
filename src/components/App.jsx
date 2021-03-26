import React from "react";
import Login from "./login";

let isLogged = false;
const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {isLogged ? <h1>Hello</h1> : <Login />}
      {currentTime > 9 && <h1>checking && operator</h1>}
    </div>
  );
}

export default App;
