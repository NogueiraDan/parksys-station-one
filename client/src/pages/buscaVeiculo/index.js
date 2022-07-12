import React, { useEffect, useState } from "react";
import "./busca.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from "axios";

const Busca = () => {
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");
  const [cars, setCars] = useState([{}]);

  const updateSearch = (value) => {
    setText(value);
  };

  const getCars = async () => {
    axios
      .get(`http://localhost:3001/list-cars/${text}`)
      .then((res) => {
        //console.log(res.data);
        setCars(res.data.data.userCars);
        console.log("Lista de carros:");
        console.log(cars);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <header>
        <h2> Encontre os veiculos de um usuário </h2>
      </header>
      <main>
        <div className="div-form">
          <Form className="d-flex mx-5">
            <Form.Control
              type="search"
              placeholder="Digite o CPF do proprietario"
              aria-label="Search"
              onChange={(e) => updateSearch(e.target.value)}
            />
            <Button variant="success" onClick={() => getCars()}>
              Buscar
            </Button>
          </Form>
          <br />
          <div className="list-cars">
            <Table bordered style={{ color: "white" }}>
              <thead>
                <tr>
                  <th>Marca</th>
                  <th>Modelo</th>
                  <th>Ano</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((item) => (
                  <tr key={item._id}>
                    <td>{item.marca}</td>
                    <td>{item.modelo}</td>
                    <td>{item.ano}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </main>
    </>
  );
};

export default Busca;

{
}
