import React from "react";
import Signin from "./components/SignIn/index";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Signin}/>
    </BrowserRouter>
  );
}
