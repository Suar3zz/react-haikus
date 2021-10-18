<<<<<<< HEAD
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
=======
import React from "react";
import "./Header.css";
const header = () => {
  return (
    <header>
      <div id="cajaBuscador">
        <input type="text" name="buscar" id="buscar" placeholder="Buscar" />
        <img
          id="lupa"
          src="./iconoBuscar.svg"
          alt=""
          width="32px"
          height="32px"
        />
      </div>
    </header>
  );
};

export default header;
>>>>>>> 03789ef05d1fe10ca01e6669b9c8ddda0fba54f5
