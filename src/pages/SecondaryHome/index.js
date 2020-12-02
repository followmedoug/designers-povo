import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import people from "../../assets/images/people.jpeg";
import laptop from "../../assets/images/laptop.jpeg";
import phone from "../../assets/images/phone.jpeg";
import belezaCulture from "../../assets/images/beleza-culture.jpeg";
import { FaTwitter, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { IoMdStopwatch, IoIosCalendar } from "react-icons/io";
import { Button, Card, Carousel } from "react-bootstrap";

export default function SecondaryHome() {
  const history = useHistory();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div>
        <img
          style={{
            width: "100%",
            height: "830px",
            objectFit: "cover",
            zIndex: -1,
            position: "absolute",
          }}
          alt="people"
          src={people}
        />
        <div style={{ marginBottom: 150 }}>
          <video width="568" height="320" autoPlay>
            <source
              src="https://www.youtube.com/watch?v=HyrpSdx4uGg"
              type="video"
            />
          </video>
        </div>
        <div
          style={{
            height: 218,
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            paddingLeft: 365,
            paddingRight: 282,
          }}
        >
          <p
            style={{
              fontSize: 18,
              fontWeight: 800,
              fontStyle: "italic",
              color: "#CEAC0F",
            }}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
            sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
            quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur,
            adipisci velit, sed quia non numquam eius mod
          </p>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <FaFacebookSquare color="#CEAC0F" size="1.5rem" />
            <FaInstagramSquare color="#CEAC0F" size="1.5rem" />
            <FaTwitter color="#CEAC0F" size="1.5rem" />
          </div>
        </div>
      </div>

      {/** CARROUSEL DE PROJETOS */}
      <div
        style={{ backgroundColor: "#F8E85A", height: "830px", paddingTop: 56 }}
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
          PROPAGANDAS
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
          {/** ITEM 1 DO CARROUSEL DE PROJETOS */}
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
              {/** CAR 1 DO ITEM 1 DO CARROUSEL DE PROJETOS */}
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
                    src={belezaCulture}
                    style={{
                      width: "253px",
                      height: "132px",
                      borderRadius: "10px",
                    }}
                  />
                  <Card.Text
                    style={{
                      fontSize: "14px",
                      marginTop: "20px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    Visitando nossos clientes, e indo de encontro aos trabalhos
                    e estabelecimento deles!
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.62)",
                      color: "#CEAC0F",
                      borderRadius: "10px",
                      height: "30px",
                      width: "185px",
                      padding: 0,
                      marginLeft: "30px",
                    }}
                    onClick={() => history.push("/projects")}
                  >
                    Saiba mais
                  </Button>
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
                    src={belezaCulture}
                    style={{
                      width: "297px",
                      height: "156px",
                      borderRadius: "10px",
                    }}
                  />
                  <Card.Text
                    style={{
                      fontSize: "16px",
                      textAlign: "center",
                      marginTop: "30px",
                      fontWeight: "500",
                    }}
                  >
                    Visitando nossos clientes, e indo de encontro aos trabalhos
                    e estabelecimento deles!
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.62)",
                      color: "#CEAC0F",
                      borderRadius: "10px",
                      height: "36px",
                      width: "217px",
                      padding: 0,
                      marginLeft: "50px",
                    }}
                    onClick={() => history.push("/projects")}
                  >
                    Saiba mais
                  </Button>
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
                    src={belezaCulture}
                    style={{
                      width: "253px",
                      height: "132px",
                      borderRadius: "10px",
                    }}
                  />
                  <Card.Text
                    style={{
                      fontSize: "14px",
                      marginTop: "20px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    Visitando nossos clientes, e indo de encontro aos trabalhos
                    e estabelecimento deles!
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.62)",
                      color: "#CEAC0F",
                      borderRadius: "10px",
                      height: "30px",
                      width: "185px",
                      padding: 0,
                      marginLeft: "30px",
                    }}
                    onClick={() => history.push("/projects")}
                  >
                    Saiba mais
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          {/** ITEM 1 DO CARROUSEL DE PROJETOS */}
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
              {/** CAR 1 DO ITEM 1 DO CARROUSEL DE PROJETOS */}
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
                    src={belezaCulture}
                    style={{
                      width: "253px",
                      height: "132px",
                      borderRadius: "10px",
                    }}
                  />
                  <Card.Text
                    style={{
                      fontSize: "14px",
                      marginTop: "20px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    Visitando nossos clientes, e indo de encontro aos trabalhos
                    e estabelecimento deles!
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.62)",
                      color: "#CEAC0F",
                      borderRadius: "10px",
                      height: "30px",
                      width: "185px",
                      padding: 0,
                      marginLeft: "30px",
                    }}
                    onClick={() => history.push("/projects")}
                  >
                    Saiba mais
                  </Button>
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
                    src={belezaCulture}
                    style={{
                      width: "297px",
                      height: "156px",
                      borderRadius: "10px",
                    }}
                  />
                  <Card.Text
                    style={{
                      fontSize: "16px",
                      textAlign: "center",
                      marginTop: "30px",
                      fontWeight: "500",
                    }}
                  >
                    Visitando nossos clientes, e indo de encontro aos trabalhos
                    e estabelecimento deles!
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.62)",
                      color: "#CEAC0F",
                      borderRadius: "10px",
                      height: "36px",
                      width: "217px",
                      padding: 0,
                      marginLeft: "50px",
                    }}
                    onClick={() => history.push("/projects")}
                  >
                    Saiba mais
                  </Button>
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
                    src={belezaCulture}
                    style={{
                      width: "253px",
                      height: "132px",
                      borderRadius: "10px",
                    }}
                  />
                  <Card.Text
                    style={{
                      fontSize: "14px",
                      marginTop: "20px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    Visitando nossos clientes, e indo de encontro aos trabalhos
                    e estabelecimento deles!
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.62)",
                      color: "#CEAC0F",
                      borderRadius: "10px",
                      height: "30px",
                      width: "185px",
                      padding: 0,
                      marginLeft: "30px",
                    }}
                    onClick={() => history.push("/projects")}
                  >
                    Saiba mais
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          {/** ITEM 1 DO CARROUSEL DE PROJETOS */}
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
              {/** CAR 1 DO ITEM 1 DO CARROUSEL DE PROJETOS */}
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
                    src={belezaCulture}
                    style={{
                      width: "253px",
                      height: "132px",
                      borderRadius: "10px",
                    }}
                  />
                  <Card.Text
                    style={{
                      fontSize: "14px",
                      marginTop: "20px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    Visitando nossos clientes, e indo de encontro aos trabalhos
                    e estabelecimento deles!
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.62)",
                      color: "#CEAC0F",
                      borderRadius: "10px",
                      height: "30px",
                      width: "185px",
                      padding: 0,
                      marginLeft: "30px",
                    }}
                    onClick={() => history.push("/projects")}
                  >
                    Saiba mais
                  </Button>
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
                    src={belezaCulture}
                    style={{
                      width: "297px",
                      height: "156px",
                      borderRadius: "10px",
                    }}
                  />
                  <Card.Text
                    style={{
                      fontSize: "16px",
                      textAlign: "center",
                      marginTop: "30px",
                      fontWeight: "500",
                    }}
                  >
                    Visitando nossos clientes, e indo de encontro aos trabalhos
                    e estabelecimento deles!
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.62)",
                      color: "#CEAC0F",
                      borderRadius: "10px",
                      height: "36px",
                      width: "217px",
                      padding: 0,
                      marginLeft: "50px",
                    }}
                    onClick={() => history.push("/projects")}
                  >
                    Saiba mais
                  </Button>
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
                    src={belezaCulture}
                    style={{
                      width: "253px",
                      height: "132px",
                      borderRadius: "10px",
                    }}
                  />
                  <Card.Text
                    style={{
                      fontSize: "14px",
                      marginTop: "20px",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    Visitando nossos clientes, e indo de encontro aos trabalhos
                    e estabelecimento deles!
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.62)",
                      color: "#CEAC0F",
                      borderRadius: "10px",
                      height: "30px",
                      width: "185px",
                      padding: 0,
                      marginLeft: "30px",
                    }}
                    onClick={() => history.push("/projects")}
                  >
                    Saiba mais
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      {/** CARROUSEL DE CURSOS */}
      <div
        style={{ backgroundColor: "#F8E85A", height: "830px", paddingTop: 56 }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p
            style={{
              color: "#000",
              fontSize: "36px",
              fontWeight: 700,
              marginLeft: 65,
              textShadow: "2px 2px #fff",
            }}
          >
            CURSOS ONLINE
          </p>
          <Button
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.62)",
              color: "#CEAC0F",
              borderRadius: "10px",
              height: "30px",
              width: "185px",
              padding: 0,
              marginRight: "30px",
              border: 0,
            }}
            onClick={() => history.push("/courses")}
          >
            Saiba mais
          </Button>
        </div>

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
                    src={laptop}
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
                    Como criar um modelo de negócio online
                  </Card.Text>
                  <Card.Text
                    style={{
                      fontSize: "16px",
                      marginTop: "20px",
                      fontWeight: 500,
                    }}
                  >
                    <IoMdStopwatch color="#CEAC0F" size="1.5rem" /> Duração: 9h
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.62)",
                      color: "#CEAC0F",
                      borderRadius: "10px",
                      height: "30px",
                      width: "185px",
                      padding: 0,
                      marginLeft: "30px",
                    }}
                  >
                    Acessar
                  </Button>
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
                    src={phone}
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
                    Use as redes sociais para lucrar mais
                  </Card.Text>
                  <Card.Text
                    style={{
                      fontSize: "16px",
                      marginTop: "30px",
                      fontWeight: "500",
                    }}
                  >
                    <IoMdStopwatch color="#CEAC0F" size="1.5rem" /> Duração: 5h
                  </Card.Text>
                  <Card.Text
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    <IoIosCalendar color="#CEAC0F" size="1.5rem" /> Conclusão: 6
                    dias
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.62)",
                      color: "#CEAC0F",
                      borderRadius: "10px",
                      height: "36px",
                      width: "217px",
                      padding: 0,
                      marginLeft: "50px",
                    }}
                  >
                    Acessar
                  </Button>
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
                    src={laptop}
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
                    Como criar um modelo de negócio online
                  </Card.Text>
                  <Card.Text
                    style={{
                      fontSize: "16px",
                      marginTop: "20px",
                      fontWeight: 500,
                    }}
                  >
                    <IoMdStopwatch color="#CEAC0F" size="1.5rem" />
                    Duração: 9h
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.62)",
                      color: "#CEAC0F",
                      borderRadius: "10px",
                      height: "30px",
                      width: "185px",
                      padding: 0,
                      marginLeft: "30px",
                    }}
                  >
                    Acessar
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
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
                    src={laptop}
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
                    Como criar um modelo de negócio online
                  </Card.Text>
                  <Card.Text
                    style={{
                      fontSize: "16px",
                      marginTop: "20px",
                      fontWeight: 500,
                    }}
                  >
                    <IoMdStopwatch color="#CEAC0F" size="1.5rem" /> Duração: 9h
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.62)",
                      color: "#CEAC0F",
                      borderRadius: "10px",
                      height: "30px",
                      width: "185px",
                      padding: 0,
                      marginLeft: "30px",
                    }}
                  >
                    Acessar
                  </Button>
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
                    src={phone}
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
                    Use as redes sociais para lucrar mais
                  </Card.Text>
                  <Card.Text
                    style={{
                      fontSize: "16px",
                      marginTop: "30px",
                      fontWeight: "500",
                    }}
                  >
                    <IoMdStopwatch color="#CEAC0F" size="1.5rem" /> Duração: 5h
                  </Card.Text>
                  <Card.Text
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    <IoIosCalendar color="#CEAC0F" size="1.5rem" /> Conclusão: 6
                    dias
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.62)",
                      color: "#CEAC0F",
                      borderRadius: "10px",
                      height: "36px",
                      width: "217px",
                      padding: 0,
                      marginLeft: "50px",
                    }}
                  >
                    Acessar
                  </Button>
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
                    src={laptop}
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
                    Como criar um modelo de negócio online
                  </Card.Text>
                  <Card.Text
                    style={{
                      fontSize: "16px",
                      marginTop: "20px",
                      fontWeight: 500,
                    }}
                  >
                    <IoMdStopwatch color="#CEAC0F" size="1.5rem" />
                    Duração: 9h
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.62)",
                      color: "#CEAC0F",
                      borderRadius: "10px",
                      height: "30px",
                      width: "185px",
                      padding: 0,
                      marginLeft: "30px",
                    }}
                  >
                    Acessar
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
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
                    src={laptop}
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
                    Como criar um modelo de negócio online
                  </Card.Text>
                  <Card.Text
                    style={{
                      fontSize: "16px",
                      marginTop: "20px",
                      fontWeight: 500,
                    }}
                  >
                    <IoMdStopwatch color="#CEAC0F" size="1.5rem" /> Duração: 9h
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.62)",
                      color: "#CEAC0F",
                      borderRadius: "10px",
                      height: "30px",
                      width: "185px",
                      padding: 0,
                      marginLeft: "30px",
                    }}
                  >
                    Acessar
                  </Button>
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
                    src={phone}
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
                    Use as redes sociais para lucrar mais
                  </Card.Text>
                  <Card.Text
                    style={{
                      fontSize: "16px",
                      marginTop: "30px",
                      fontWeight: "500",
                    }}
                  >
                    <IoMdStopwatch color="#CEAC0F" size="1.5rem" /> Duração: 5h
                  </Card.Text>
                  <Card.Text
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                    }}
                  >
                    <IoIosCalendar color="#CEAC0F" size="1.5rem" /> Conclusão: 6
                    dias
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.62)",
                      color: "#CEAC0F",
                      borderRadius: "10px",
                      height: "36px",
                      width: "217px",
                      padding: 0,
                      marginLeft: "50px",
                    }}
                  >
                    Acessar
                  </Button>
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
                    src={laptop}
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
                    Como criar um modelo de negócio online
                  </Card.Text>
                  <Card.Text
                    style={{
                      fontSize: "16px",
                      marginTop: "20px",
                      fontWeight: 500,
                    }}
                  >
                    <IoMdStopwatch color="#CEAC0F" size="1.5rem" />
                    Duração: 9h
                  </Card.Text>
                  <Button
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.62)",
                      color: "#CEAC0F",
                      borderRadius: "10px",
                      height: "30px",
                      width: "185px",
                      padding: 0,
                      marginLeft: "30px",
                    }}
                  >
                    Acessar
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
