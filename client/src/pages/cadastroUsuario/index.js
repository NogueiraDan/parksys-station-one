import React, { useState } from "react";
import "./usuario.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Usuario = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    cpf: "",
    nascimento: "",
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
    await axios.post("http://localhost:3001/add-user", newUser, {
      headers: { "Content-Type": "application/json" },
    });

    setForm({
      nome: "",
      email: "",
      cpf: "",
      nascimento: "",
    });
  };

  return (
    <>
      <header className="header">
        <h1> Cadastre um usuário </h1>
      </header>
      <main>
        <Form onSubmit={handleSubmit} method="POST">
          <Form.Group className="mb-3 mx-5">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Digite seu nome"
              id="nome"
              value={form.nome}
              onChange={(e) => updateForm({ nome: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3 mx-5">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Digite seu email"
              id="email"
              value={form.email}
              onChange={(e) => updateForm({ email: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3 mx-5">
            <Form.Label>CPF</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Digite seu CPF"
              id="cpf"
              value={form.cpf}
              onChange={(e) => updateForm({ cpf: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3 mx-5">
            <Form.Label>Data nascimento</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="XX/XX/XXXX"
              id="nascimento"
              value={form.nascimento}
              onChange={(e) => updateForm({ nascimento: e.target.value })}
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

export default Usuario;
