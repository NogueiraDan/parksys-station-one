import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./listaUsuario.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

const ListaUsuarios = () => {
  const [users, setUsers] = useState([{}]);
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [oneUser, setOneUser] = useState([{}]);
  const handleClose = () => {
    setShow(false);
    setOneUser([{}]);
  };
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const getUsers = async () => {
    axios
      .get(`http://localhost:3001/list-user`)
      .then((res) => {
        //console.log(res.data);
        setUsers(res.data.data.users);
        console.log("Lista de usuários:");
        console.log(users);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getOneUser = async () => {
    axios
      .get(`http://localhost:3001/user/${text}`)
      .then((res) => {
        console.log(res.data);
        setOneUser(res.data.data.user);
        console.log("Usuário:");
        console.log(oneUser);
        if(res.data.data.user===null){
          alert('Usuário não encontrado')
          navigate("/");
          
        }
      })     
   
  };

  return (
    <>
      <header>
        <h2> Liste todos os usuários </h2>
      </header>
      <main className="main-content">
        <Button variant="primary" onClick={handleShow} id="btn-searchUser">
          Pesquise um usuário
        </Button>
        <hr />

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>
              Encontre um usuário
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nome Completo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ex: Fulano da Silva"
                  autoFocus
                  onChange={(event) => setText(event.target.value)}
                />
              </Form.Group>
            </Form>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>CPF</th>
                  <th>Nascimento</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{oneUser.nome}</td>
                  <td>{oneUser.cpf}</td>
                  <td>{oneUser.nascimento}</td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={getOneUser}>
              Pesquisar
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="list-users">
          <Button variant="primary" id="btn-list" onClick={() => getUsers()}>
            Liste todos usuários
          </Button>
          <br />
          <Table bordered style={{ color: "white" }}>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>CPF</th>
                <th>Nascimento</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => (
                <tr key={item._id}>
                  <td>{item.nome}</td>
                  <td>{item.email}</td>
                  <td>{item.cpf}</td>
                  <td>{item.nascimento}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </main>
    </>
  );
};

export default ListaUsuarios;
