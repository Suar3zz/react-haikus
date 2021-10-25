import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { faFacebook, faInstagram, faEnvelope } from "@fortawesome/free-brands-svg-icons";

const LogosContactos = [
    {
        srcDeLogo:<FontAwesomeIcon icon={faFacebook} className="iconFacebook"/>
    },
    {
        srcDeLogo:<FontAwesomeIcon icon={faEnvelope} className="iconEmail"/>
    },
    {
        srcDeLogo:<FontAwesomeIcon icon={faInstagram} className="iconInstagram"/>
    }
    ];

export default LogosContactos

const ListaDeLogos = () => {
    return (
        <div>
            
        </div>
    )
}

export default ListaDeLogos
