import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";

function App() {
  // const [state, dispatch] = useReducer((state, action) => {
  //   switch (action.type) {
  //     case "LOG_IN":
  //       return {
  //         ...state,
  //         authInfo: action.payload,
  //       };
  //     case "SIGN_UP":
  //       return {
  //         ...state,
  //         userInfo: action.payload,
  //       };
  //     default:
  //       return state;
  //   }
  // }, defaultState);
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Home"} element={<Home />} />
          <Route path={"/Signup"} element={<Signup />} />
          <Route path={"/Login"} element={<Login />} />
          <Route path={"/ForgotPassword"} element={<ForgotPassword />} />
          {/* 404 not found page */}
          {/* <Route path='*' element={}/> */}
        </Routes>
      </BrowserRouter>
    </React.Fragment>
    // </div>
  );
}

export default App;
