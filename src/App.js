import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
      Full Stack Developer <p></p>
      <p> Andy Dang</p>
      <p></p>I build and design apps that focus on the user experience
    </>
  );
}

export default App;
