import React from 'react';
import ListaDeLogos from "./ListaDeLogos";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import "./Contactanos.css";
const Contactanos = () => {
    return (
        <div className="Contenedor">
            <div className="IconosContacto">
                <ListaDeLogos icono={faFacebook} className="icono"/>
                <ListaDeLogos icono={faEnvelope} className="icono"/>
                <ListaDeLogos icono={faInstagram} className="icono"/>
            </div>   
            <div className="TextoContactanos">
                <p id="parrafoContac">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos perspiciatis veritatis adipisci laborum. Soluta quia amet eligendi tempore atque quasi.</p>
            </div>
        </div>
    )
}

export default Contactanos;
