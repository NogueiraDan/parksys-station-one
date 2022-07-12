import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavbarMenu = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">
            ParkSys
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Link to="/" className="a-text">
                |Home|
              </Link>
              <Link to="/usuario" className="a-text">
                |Cadastrar Usuario|
              </Link>
              <Link to="/veiculo" className="a-text">
                |Cadastrar Veiculo|
              </Link>
              <Link to="/lista-usuarios" className="a-text">
                |Listar Usuarios|
              </Link>
              <Link to="/busca" className="a-text">
                |Buscar|
              </Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMenu;
