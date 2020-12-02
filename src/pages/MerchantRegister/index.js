import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export default function MerchantRegister() {
  const history = useHistory();
  const [confirm, setConfirm] = useState("off");
  const [nope, setNope] = useState("off");
  return (
    <>
      <div
        style={{
          height: "80vh",
          width: "100%",
          backgroundColor: "#F8E85A",
          paddingTop: 100,
          paddingLeft: 83,
        }}
      >
        <p
          style={{
            fontSize: 64,
            fontStyle: "italic",
            fontWeight: 800,
          }}
        >
          CADASTRO
        </p>
        <p
          style={{
            fontSize: "30px",
            fontWeight: 800,
          }}
        >
          Por favor, nos forneça algumas informações para que um designer com as
          experiencias necessarias encontre você.
        </p>
        <div>
          <p
            style={{
              fontSize: "26px",
              fontWeight: 700,
            }}
          >
            Sou um ambulante:
          </p>
          <fieldset>
            <Form.Group>
              <Form.Check
                id="confirm"
                label="Sim"
                type="radio"
                name="confirm"
                onClick={(e) => setConfirm(e.target.value)}
              />
              <Form.Check
                id="nope"
                label="Não"
                type="radio"
                name="nope"
                onClick={(e) => setNope(e.target.value)}
              />
            </Form.Group>
          </fieldset>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginTop: "60px",
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
            onClick={() => history.push("/merchant-tutorial")}
          >
            FINALIZAR CADASTRO
          </Button>
        </div>
      </div>
      <div
        style={{
          height: "187px",
          width: "100%",
          backgroundColor: "#353535",
          zIndex: 1,
        }}
      ></div>
    </>
  );
}
