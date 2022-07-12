import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Veiculo = () => {
  const [form, setForm] = useState({
    marca: "",
    modelo: "",
    ano: "",
    cpfProprietario: "",
  });

  const updateForm = (value) => {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submited");
    const newUser = { ...form };
    await axios.post("http://localhost:3001/add-car", newUser, {
      headers: { "Content-Type": "application/json" },
    });

    setForm({
      marca: "",
      modelo: "",
      ano: "",
      cpfProprietario: "",
    });
  };

  return (
    <>
      <header className="header">
        <h1> Cadastre um veículo </h1>
      </header>
      <main>
        <Form onSubmit={handleSubmit} method="POST">
          <Form.Group className="mb-3 mx-5">
            <Form.Label>Marca do carro</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Digite a marca do carro"
              id="marca"
              value={form.marca}
              onChange={(e) => updateForm({ marca: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3 mx-5">
            <Form.Label>Modelo do carro</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Digite o modelo"
              id="modelo"
              value={form.modelo}
              onChange={(e) => updateForm({ modelo: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3 mx-5">
            <Form.Label>Ano do carro</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Digite o ano do carro"
              id="ano"
              value={form.ano}
              onChange={(e) => updateForm({ ano: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3 mx-5">
            <Form.Label>CPF do Propietario</Form.Label>
            <Form.Control
              required
              type="text"
              id="marca"
              value={form.cpfProprietario}
              onChange={(e) => updateForm({ cpfProprietario: e.target.value })}
            />
          </Form.Group>

          <Button variant="primary mx-5" size="lg" type="submit">
            Enviar
          </Button>
        </Form>
      </main>
    </>
  );
};

export default Veiculo;
