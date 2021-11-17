import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import "./Tarjetas.css";
import {useState} from "react";
import { motion } from  "framer-motion";


const Tarjetas = ({ imagen, fotoDePerfil, nombreDeHaiku, haiku}) => {
  const [invisible, setInvisible] = useState(true);

    const cambiarVisibilidad = () => {
      if(invisible === false){
        setInvisible(true) ;
      } else if(invisible === true){
        setInvisible(false);
      }
    }
    
  return (
    <div className="ContenedorTarjeta">
      <div className="ImagenYHaiku" onClick={cambiarVisibilidad}>
        <p className="Haiku" style={{display: invisible ? "none": "block"}} >{haiku}</p>
        <motion.img src={imagen} className="ImagenTarjeta" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}  />
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
