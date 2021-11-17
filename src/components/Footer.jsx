import React from "react";
import "./Footer.css";
import { faEnvelope, faShare } from "@fortawesome/free-solid-svg-icons";
import LinkFooter from "./LinkFooter";
import {  Link } from "react-router-dom";
import Compartir from "./Compartir";

const Footer = () => {
  return (
    <footer>
      <Link to="/contactanos" className="hipervinculo"><LinkFooter icono={faEnvelope} texto="Contactanos" /></Link>
      <Compartir><LinkFooter icono={faShare} texto="Compartir" onClick={() => navigator.clipboard.writeText("AAAAAAAAA")} /></Compartir>
    </footer>
  );
};

export default Footer;
