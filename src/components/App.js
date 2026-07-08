import React, { useState } from "react";
import Login from "./Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>Parent Component</h1>

      {isLoggedIn ? (
        <h2>You are logged in!</h2>
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;