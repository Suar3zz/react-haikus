<<<<<<< HEAD
import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEmail } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
    return (
        <footer>
            <div id="ContenedorLinkFooter">
                    <div className="logos">
                        <ul>
                            <li>
                           {/*<FontAwesomeIcon icon={faEmail} id="IconoEmail"/>*/}
                            <img className="Email" src="Email.svg"  />
                            <p>Contactanos</p>
                        </li>
                        <li>
                            <img className="Share" src="shareIcon.svg"  />
                            <p>Comparti</p>
                        </li>
                    </ul>    
                </div>      
            </div>    
        </footer>
    );
}

export default Footer
=======
import React from "react";

const footer = () => {
  return <footer></footer>;
};

export default footer;
>>>>>>> 03789ef05d1fe10ca01e6669b9c8ddda0fba54f5
