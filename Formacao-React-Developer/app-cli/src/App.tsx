import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from "./pages/feed";
import { Registro } from "./pages/register";
import React from "react";
import { AuthContextProvider } from "./context/auth";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/register" element={<Registro />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
