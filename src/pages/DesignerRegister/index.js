import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export default function DesignerRegister() {
  const history = useHistory();

  return (
    <>
      <div
        style={{
          height: "90vh",
          width: "100%",
          backgroundColor: "#F8E85A",
          paddingTop: 50,
          paddingLeft: 83,
        }}
      >
        <p
          style={{
            fontSize: 54,
            fontStyle: "italic",
            fontWeight: 800,
          }}
        >
          CADASTRO
        </p>
        <p
          style={{
            fontSize: "20px",
            fontWeight: 800,
          }}
        >
          Por favor, nos forneça algumas informações para que possamos montar o
          seu perfil.
        </p>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "300px" }}>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome"
              style={{
                width: "374px",
                height: "22px",
                borderRadius: "50px",
                border: 0,
                marginBottom: "10px",
              }}
            />
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email"
              style={{
                width: "374px",
                height: "22px",
                borderRadius: "50px",
                border: 0,
                marginBottom: "10px",
              }}
            />
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control
              type="text"
              placeholder="Data de Nascimento"
              style={{
                width: "374px",
                height: "22px",
                borderRadius: "50px",
                border: 0,
                marginBottom: "10px",
              }}
            />
            <Form.Label>Especialidades</Form.Label>
            <Form.Control
              type="text"
              placeholder="Especialidades"
              style={{
                width: "374px",
                height: "22px",
                borderRadius: "50px",
                border: 0,
                marginBottom: "10px",
              }}
            />
            <Form.Label>Link para portifólio</Form.Label>
            <Form.Control
              type="text"
              placeholder="Link para portifólio"
              style={{
                width: "374px",
                height: "22px",
                borderRadius: "50px",
                border: 0,
                marginBottom: "10px",
              }}
            />
          </div>

          <div>
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome"
              style={{
                width: "374px",
                height: "22px",
                borderRadius: "50px",
                border: 0,
                marginBottom: "10px",
              }}
            />
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email"
              style={{
                width: "374px",
                height: "22px",
                borderRadius: "50px",
                border: 0,
                marginBottom: "10px",
              }}
            />
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control
              type="text"
              placeholder="Data de Nascimento"
              style={{
                width: "374px",
                height: "22px",
                borderRadius: "50px",
                border: 0,
                marginBottom: "10px",
              }}
            />
            <Form.Check
              id="1"
              label="De 1 a 5 anos"
              type="radio"
              name="confirm"
            />
            <Form.Check
              id="2"
              label="De 5 a 10 anos"
              type="radio"
              name="nope"
            />
            <Form.Check
              id="3"
              label="Mais de 10 anos"
              type="radio"
              name="nope"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <Button
            style={{
              backgroundColor: "#353535",
              height: "58px",
              fontSize: "38px",
              textAlign: "center",
              fontStyle: "italic",
              fontWeight: "bold",
              width: "1200px",
              padding: 0,
              borderRadius: "50px",
              border: 0,
            }}
            onClick={() => history.push("/designer-tutorial")}
          >
            FINALIZAR CADASTRO
          </Button>
        </div>
      </div>
      <div
        style={{
          height: "100px",
          width: "100%",
          backgroundColor: "#353535",
          zIndex: 1,
        }}
      ></div>
    </>
  );
}
