import React, { useState } from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

export default function DesignerTutorial() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div
        style={{ height: "80vh", width: "100%", backgroundColor: "#F8E85A" }}
      >
        {/** CARROUSEL DE CURSOS */}
        <div
          style={{
            backgroundColor: "#F8E85A",
            height: "830px",
            paddingTop: 56,
          }}
        >
          <p
            style={{
              color: "#000",
              fontSize: "36px",
              fontWeight: 700,
              marginLeft: 65,
              textShadow: "2px 2px #fff",
            }}
          >
            UM BREVE TUTORIAL PELA PLATAFORMA
          </p>

          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            style={{
              width: "100%",
              backgroundColor: "#D9CB48",
              padding: " 50px 76px",
            }}
            indicators={false}
            nextIcon={<BsCaretRightFill size="3.5rem" color="#353535" />}
            prevIcon={<BsCaretLeftFill size="3.5rem" color="#353535" />}
          >
            {/** ITEM 1 DO CARROUSEL DE CURSOS */}
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  padding: "76px 50px",
                  height: "441px",
                }}
              >
                {/** CARD 1 DO ITEM 1 DO CARROUSEL DE CURSOS */}
                <Card
                  style={{
                    height: "317px",
                    width: "291px",
                    backgroundColor: "#EBE8D3",
                    borderRadius: "10px",
                  }}
                >
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      style={{
                        width: "253px",
                        height: "132px",
                        borderRadius: "10px",
                      }}
                    />
                    <Card.Text
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Paginas e funções importantes no canto superior direito
                    </Card.Text>
                  </Card.Body>
                </Card>

                {/** CARD DO MEIO */}
                <Card
                  style={{
                    width: "343px",
                    height: "373px",
                    backgroundColor: "#EBE8D3",
                    borderRadius: "10px",
                  }}
                >
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      style={{
                        width: "297px",
                        height: "156px",
                        borderRadius: "10px",
                      }}
                    />
                    <Card.Text
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      Paginas e funções importantes no canto superior direito
                    </Card.Text>
                  </Card.Body>
                </Card>

                {/** CARD FINAL */}
                <Card
                  style={{
                    height: "317px",
                    width: "291px",
                    backgroundColor: "#EBE8D3",
                    borderRadius: "10px",
                  }}
                >
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      style={{
                        width: "253px",
                        height: "132px",
                        borderRadius: "10px",
                      }}
                    />
                    <Card.Text
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Paginas e funções importantes no canto superior direito
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        <div>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            style={{
              width: "100%",
              backgroundColor: "#353535",
              padding: " 50px 76px",
            }}
            indicators={false}
            nextIcon={<BsCaretRightFill size="3.5rem" color="#353535" />}
            prevIcon={<BsCaretLeftFill size="3.5rem" color="#353535" />}
          >
            {/** ITEM 1 DO CARROUSEL DE CURSOS */}
            <Carousel.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  padding: "76px 50px",
                  height: "441px",
                }}
              >
                {/** CARD 1 DO ITEM 1 DO CARROUSEL DE CURSOS */}
                <Card
                  style={{
                    height: "317px",
                    width: "291px",
                    backgroundColor: "#F8E85A",
                    borderRadius: "10px",
                  }}
                >
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      style={{
                        width: "253px",
                        height: "132px",
                        borderRadius: "10px",
                      }}
                    />
                    <Card.Text
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Paginas e funções importantes no canto superior direito
                    </Card.Text>
                  </Card.Body>
                </Card>

                {/** CARD DO MEIO */}
                <Card
                  style={{
                    width: "343px",
                    height: "373px",
                    backgroundColor: "#F8E85A",
                    borderRadius: "10px",
                  }}
                >
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      style={{
                        width: "297px",
                        height: "156px",
                        borderRadius: "10px",
                      }}
                    />
                    <Card.Text
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      Paginas e funções importantes no canto superior direito
                    </Card.Text>
                  </Card.Body>
                </Card>

                {/** CARD FINAL */}
                <Card
                  style={{
                    height: "317px",
                    width: "291px",
                    backgroundColor: "#F8E85A",
                    borderRadius: "10px",
                  }}
                >
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      style={{
                        width: "253px",
                        height: "132px",
                        borderRadius: "10px",
                      }}
                    />
                    <Card.Text
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      Paginas e funções importantes no canto superior direito
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        <div
          style={{
            height: "20vh",
            width: "100%",
            backgroundColor: "#353535",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            style={{
              backgroundColor: "#F8E85A",
              border: 0,
              color: "#353535",
              borderRadius: "50px",
              width: "1276px",
              height: "58px",
              fontSize: "38px",
              padding: 0,
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            ACESSAR PERFIL
          </Button>
        </div>
      </div>
    </>
  );
}
