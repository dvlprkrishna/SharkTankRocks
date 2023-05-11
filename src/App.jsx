import "./App.css";
import Header from "./pages/Header";
import MainList from "./pages/MainList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";

import Season1 from "./assets/season1.json";
import Season2 from "./assets/season2.json";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Stats from "./pages/Stats";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
