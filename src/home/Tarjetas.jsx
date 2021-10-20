import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import "./Tarjetas.css";

const Tarjetas = ({ imagen, fotoDePerfil, nombreDeHaiku, IconoCompartir }) => {
  return (
    <div className="ContenedorTarjeta">
      <div className="ImagenTarjeta">
        <img src={imagen} alt="/" />
      </div>
      <div className="cuerpoTarjeta">
        <div className="FotoYTitulo">
          <img src={fotoDePerfil} alt="/" className="fotoDePerfilTarjeta" />
          <p className="nombreDeHaikuTarjeta">{nombreDeHaiku}</p>
        </div>
        <FontAwesomeIcon icon={faShareAlt} className="IconoCompartirTarjeta" />
      </div>
    </div>
  );
};

export default Tarjetas;
