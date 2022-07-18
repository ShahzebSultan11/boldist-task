import React from "react";
import "./App.css";
import User from "./features/user/User";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <h4>User Info:</h4>
        <User />
      </div>
    </div>
  );
}

export default App;
