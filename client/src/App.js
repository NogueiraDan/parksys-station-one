import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home";
import Usuario from "../src/pages/cadastroUsuario";
import Veiculo from "../src/pages/cadastroVeiculo";
import Busca from "../src/pages/buscaVeiculo";
import ListaUsuarios from "./pages/listaUsuarios";
import NavbarMenu from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Router>
        <NavbarMenu />
        <hr />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/usuario" element={<Usuario />} />
          <Route exact path="/veiculo" element={<Veiculo />} />
          <Route exact path="/busca" element={<Busca />} />
          <Route exact path="/lista-usuarios" element={<ListaUsuarios />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
