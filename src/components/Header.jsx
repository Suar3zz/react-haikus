import React from 'react';
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const header = () => {
    return (
        <header>
            <div id="cajaBuscador">
                <input type="text" name="buscar" id="buscador" placeholder="Buscar" />
                {/*  <img id="lupa" src="./searchIcon.svg" alt="" width="32px" height="32px" />*/}
                <FontAwesomeIcon icon={faSearch} id="IconoBuscador"/>
            </div>
        </header>
    );
}

export default header
