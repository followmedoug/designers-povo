import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export default function LoginMerchant() {
  const history = useHistory();
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#F8E85A",
          paddingTop: "70px",
        }}
      >
        <div style={{ marginLeft: "600px" }}>
          <p style={{ fontSize: "64px", fontWeight: 800, fontStyle: "italic" }}>
            LOGIN
          </p>
          <span style={{ fontSize: "30px", fontWeight: 600 }}>
            Bem vindo de volta!!
          </span>

          <div style={{ marginBottom: "50px" }}>
            <Form.Label>Email/login</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome"
              style={{
                width: "474px",
                height: "32px",
                borderRadius: "50px",
                border: 0,
                marginBottom: "24px",
              }}
            />
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome"
              style={{
                width: "474px",
                height: "32px",
                borderRadius: "50px",
                border: 0,
              }}
            />
            <span>Esqueci minha senha</span>
          </div>
          <div>
            <Button
              style={{
                backgroundColor: "#353535",
                borderRadius: "50px",
                border: 0,
                color: "#fff",
                width: "474px",
                height: "58px",
                fontSize: "36px",
                fontStyle: "italic",
                fontWeight: "bold",
                textAlign: "center",
              }}
              onClick={() => history.push("/home-designer")}
            >
              ENTRAR
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
