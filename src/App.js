import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/" || "/Home"} element={<Home />} />
          {/* 404 not found page */}
          {/* <Route path='*' element={}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
