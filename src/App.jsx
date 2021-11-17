import "./App.css";
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Home from "./home/Home";
import Contactanos from "./components/contactanos/Contactanos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contactanos">
            <Contactanos />
          </Route>
        </Switch>
      </Main>
      <Footer />
    </Router>
  );
}

export default App;
