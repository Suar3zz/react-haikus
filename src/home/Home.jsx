import React from "react";
import Tarjetas from "./Tarjetas.jsx";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <h4 className="H4">Colección</h4>
      <div id="contenedorTarjetas"></div>
      <Tarjetas
        imagen="https://picsum.photos/seed/picsum/300/500"
        fotoDePerfil="https://www.ellitoral.com//um/fotos/310346_iorio.jpg"
        nombreDeHaiku="Haiku"
        IconoCompartir="/"
      />
      <Tarjetas
        imagen="https://picsum.photos/seed/picsum/300/500"
        fotoDePerfil="https://www.ellitoral.com//um/fotos/310346_iorio.jpg"
        nombreDeHaiku="Haiku"
        IconoCompartir="/"
      />
    </div>
  );
};

export default Home;
