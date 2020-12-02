import React from "react";
import { Button, Card } from "react-bootstrap";
import belezaCulture from "../../assets/images/beleza-culture.jpeg";

export default function Projects() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#F8E85A",
          height: "100vh",
          width: "100%",
          paddingTop: 100,
          paddingLeft: 83,
        }}
      >
        <p
          style={{
            fontSize: 64,
            fontStyle: "italic",
            fontWeight: 800,
            marginBottom: "-10px",
          }}
        >
          SOBRE NÓS
        </p>
        <p
          style={{
            fontSize: 34,
            fontStyle: "italic",
            fontWeight: 800,
            marginBottom: 34,
            marginTop: 0,
          }}
        >
          Conheça alguns dos projetos que desenvolvemos!
        </p>
        <p
          style={{
            fontSize: 18,
            fontStyle: "italic",
            fontWeight: "bold",
            marginBottom: 34,
            marginTop: 0,
          }}
        >
          Beleza Culture
        </p>

        <div style={{ display: "flex" }}>
          <Card
            style={{
              width: "372px",
              height: "446px",
              backgroundColor: "#EBE8D3",
              borderRadius: "10px",
              border: 0,
            }}
          >
            <Card.Body>
              <Card.Img
                variant="top"
                src={belezaCulture}
                style={{
                  width: "335px",
                  height: "182px",
                  borderRadius: "10px",
                }}
              />
              <Card.Text
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                }}
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt, explicabo.
              </Card.Text>

              <Button
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.62)",
                  color: "#CEAC0F",
                  borderRadius: "10px",
                  height: "35px",
                  width: "215px",
                  padding: 0,
                  marginLeft: "60px",
                  border: 0,
                }}
              >
                Acessar
              </Button>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "372px",
              height: "446px",
              backgroundColor: "#EBE8D3",
              borderRadius: "10px",
              border: 0,
              marginLeft: "300px",
              marginRight: "300px",
            }}
          >
            <Card.Body>
              <Card.Img
                variant="top"
                src={belezaCulture}
                style={{
                  width: "335px",
                  height: "182px",
                  borderRadius: "10px",
                }}
              />
              <Card.Text
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                }}
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt, explicabo.
              </Card.Text>

              <Button
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.62)",
                  color: "#CEAC0F",
                  borderRadius: "10px",
                  height: "35px",
                  width: "215px",
                  padding: 0,
                  marginLeft: "60px",
                  border: 0,
                }}
              >
                Acessar
              </Button>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "372px",
              height: "446px",
              backgroundColor: "#EBE8D3",
              borderRadius: "10px",
              border: 0,
            }}
          >
            <Card.Body>
              <Card.Img
                variant="top"
                src={belezaCulture}
                style={{
                  width: "335px",
                  height: "182px",
                  borderRadius: "10px",
                }}
              />
              <Card.Text
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                }}
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt, explicabo.
              </Card.Text>

              <Button
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.62)",
                  color: "#CEAC0F",
                  borderRadius: "10px",
                  height: "35px",
                  width: "215px",
                  padding: 0,
                  marginLeft: "60px",
                  border: 0,
                }}
              >
                Acessar
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
