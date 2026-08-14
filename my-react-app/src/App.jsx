import React, { useState } from "react";
import Header from "./components/Header";

function App() {
  const [dark, setDark] = useState(false);

  const [user, setUser] = useState({
    name: "John Doe",
    initials: "JD",
  });

  const handleNav = (page) => {
    console.log("Navigate:", page);

  };

  const handleSignIn = () => {
    console.log("Sign in clicked");
  };

  const handleLogout = () => {
    setUser(null);
    console.log("User logged out");
  };

  return (
    <div
      className={`min-h-screen transition-colors ${dark
        ? "bg-purple-950 text-white"
        : "bg-orange-50 text-gray-900"
        }`}
    >
      <Header
        user={user}
        dark={dark}
        onNav={handleNav}
        onSignIn={handleSignIn}
        onLogout={handleLogout}
      />

      <main className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-4xl font-bold">
          Welcome to Careerly
        </h1>

        <button
          type="button"
          onClick={() => setDark(!dark)}
          className="mt-6 rounded-full bg-violet-600 px-5 py-2.5 font-medium text-white hover:bg-violet-700"
        >
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </main>
    </div>
  );
}

export default App;