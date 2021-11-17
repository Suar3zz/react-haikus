import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import "./ListaDeLogos.css";
const ListaDeLogos = ({icono}) => {
    return (
        <div className="A">
            <FontAwesomeIcon icon={icono} className="iconosContacto"/>
        </div>
    )
}

export default ListaDeLogos
