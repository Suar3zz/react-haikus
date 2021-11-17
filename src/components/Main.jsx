import React from "react";
import "./Main.css";
import {  Link } from "react-router-dom";

const Main = ({ children }) => {
  return (
    <main>
      <Link to="/" className="hipervinculoH1"><h1 className="H1">Haikus</h1></Link>
      {children}
    </main>
  );
};

export default Main;
