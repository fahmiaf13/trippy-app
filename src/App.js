import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login, Home, Register } from "./components/pages";
import NavigationBar from "./components/templates/navigationBar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
