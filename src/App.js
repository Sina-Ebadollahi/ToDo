import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Home"} element={<Home />} />
          {/* 404 not found page */}
          {/* <Route path='*' element={}/> */}
        </Routes>
      </BrowserRouter>
    </React.Fragment>
    // </div>
  );
}

export default App;
