import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Home from "./home/Home";
import Contactanos from "./contactanos/Contactanos";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Home />
        <Contactanos />
      </Main>
      <Footer />
    </>
  );
}

export default App;
