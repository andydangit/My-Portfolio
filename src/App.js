import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from './components/pages/Home'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component=
          {Home}/>
        </Switch>
      </Router>
      Full Stack Developer <p></p>
      <p> Andy Dang</p>
      <p></p>I build and design apps that focus on the user experience
    </>
  );
}

export default App;
