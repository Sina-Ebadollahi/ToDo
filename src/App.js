import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Home"} element={<Home />} />
          <Route path={"/Signup"} element={<Signup />} />
          <Route path={"/Login"} element={<Login />} />
          {/* 404 not found page */}
          {/* <Route path='*' element={}/> */}
        </Routes>
      </BrowserRouter>
    </React.Fragment>
    // </div>
  );
}

export default App;
