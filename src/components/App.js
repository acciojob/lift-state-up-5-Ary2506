import React, { useState } from "react";
import Login from "./Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <h1>You are logged in!</h1>
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;