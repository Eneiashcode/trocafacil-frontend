import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Signup from "./components/Signup";
import Login from "./components/ui/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />  {/* Adicionando rota de Login */}
      </Routes>
    </Router>
  );
}

export default App;
