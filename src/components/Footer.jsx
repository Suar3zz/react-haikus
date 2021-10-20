import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faShare } from "@fortawesome/free-solid-svg-icons";
import LinkFooter from "./LinkFooter";

const Footer = () => {
  return (
    <footer>
      <LinkFooter icono={faEnvelope} texto="Contactanos" />
      <LinkFooter icono={faShare} texto="Compartir" />
    </footer>
  );
};

export default Footer;
