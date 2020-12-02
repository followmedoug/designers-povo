import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { BsCaretRightFill, BsCaretLeftFill } from "react-icons/bs";
import banner from "../../assets/images/banner.jpeg";
import flag2 from "../../assets/images/flag2.png";
import flag from "../../assets/images/flag.jpeg";
import people from "../../assets/images/people.jpeg";
import podcastBanner from "../../assets/images/podcast-banner.jpeg";

import { Button, Card, Carousel } from "react-bootstrap";

export default function Home() {
  const history = useHistory();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div>
        <img
          src={banner}
          style={{ width: "100%", objectFit: "cover", height: "553px" }}
          alt="banner"
        />
      </div>
      <div style={{ backgroundColor: "#353535", height: "511px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "66px 68px 0 65px",
          }}
        >
          <div style={{ width: "50%" }}>
            <h2
              style={{ fontWeight: 700, color: "#fff", marginBottom: "72px" }}
            >
              QUEM SOMOS
            </h2>
            <p style={{ color: "#fff", marginBottom: "38px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              luctus nibh sapien, ut aliquet odio varius non. Sed arcu lorem,
              laoreet in elit a, finibus pharetra felis. Vivamus eu odio in nisi
              pulvinar varius eget eu odio. Sed ac pulvinar ante. Nunc pharetra
              tellus erat, et facilisis ante semper eu. Ut est ligula, mattis ac
              nulla eget, facilisis vestibulum dui. Vivamus a auctor tellus.
              Nulla volutpat lectus eget libero hendrerit, nec vehicula nisl
              accumsan. Nullam sed sem ultrices, molestie est at, luctus tellus.
              Sed tincidunt erat blandit aliquet eleifend. Nulla ac lacinia
              enim. Vestibulum sagittis tortor eget neque ultrices luctus. Fusce
              et imperdiet purus, ut porttitor mi. Vestibulum non massa porta,
              sodales dolor ut, convallis ex. Interdum et malesuada fames ac
              ante ipsum primis in faucibu
            </p>
            <Button
              style={{
                backgroundColor: "#CEAC0F",
                border: 0,
                borderRadius: "10px",
                color: "#000",
                fontWeight: "bold",
              }}
              onClick={() => history.push("/about")}
            >
              SAIBA MAIS
            </Button>
          </div>
          <div
            style={{
              justifyContent: "center",
              width: "50%",
            }}
          >
            <img
              src={flag2}
              alt="flag logo"
              style={{ marginLeft: "170px", width: "434px" }}
            />
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: "#F8E85A", height: "611px", paddingTop: 56 }}
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
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "76px 50px",
                height: "300px",
              }}
            >
              <Card
                style={{
                  height: "181px",
                  width: "191px",
                  backgroundColor: "#EBE8D3",
                }}
              >
                <Card.Body>
                  <Card.Text
                    style={{
                      fontSize: "12px",
                      marginTop: "70px",
                      textAlign: "center",
                      fontWeight: "500",
                    }}
                  >
                    Fique em casa e use os serviços locais e dos pequenos
                    empreendedores de sua região!
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "243px",
                  height: "245px",
                  backgroundColor: "#EBE8D3",
                }}
              >
                <Card.Body>
                  <Card.Text
                    style={{
                      fontSize: "16px",
                      textAlign: "center",
                      marginTop: "120px",
                      fontWeight: "500",
                    }}
                  >
                    Visitando nossos clientes, e indo de encontro aos trabalhos
                    e estabelecimento deles!
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  height: "181px",
                  width: "191px",
                  backgroundColor: "#EBE8D3",
                  fontWeight: "500",
                }}
              >
                <Card.Body>
                  <Card.Text
                    style={{
                      fontSize: "12px",
                      marginTop: "100px",
                      textAlign: "center",
                    }}
                  >
                    Junte-se aos nossos patrocionadores!
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "76px 50px",
                height: "300px",
              }}
            >
              <Card
                style={{
                  height: "181px",
                  width: "191px",
                  backgroundColor: "#EBE8D3",
                }}
              >
                <Card.Body>
                  <Card.Text
                    style={{
                      fontSize: "12px",
                      marginTop: "70px",
                      textAlign: "center",
                      fontWeight: "500",
                    }}
                  >
                    Fique em casa e use os serviços locais e dos pequenos
                    empreendedores de sua região!
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "243px",
                  height: "245px",
                  backgroundColor: "#EBE8D3",
                }}
              >
                <Card.Body>
                  <Card.Text
                    style={{
                      fontSize: "16px",
                      textAlign: "center",
                      marginTop: "120px",
                      fontWeight: "500",
                    }}
                  >
                    Visitando nossos clientes, e indo de encontro aos trabalhos
                    e estabelecimento deles!
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  height: "181px",
                  width: "191px",
                  backgroundColor: "#EBE8D3",
                  fontWeight: "500",
                }}
              >
                <Card.Body>
                  <Card.Text
                    style={{
                      fontSize: "12px",
                      marginTop: "100px",
                      textAlign: "center",
                    }}
                  >
                    Junte-se aos nossos patrocionadores!
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "76px 50px",
                height: "300px",
              }}
            >
              <Card
                style={{
                  height: "181px",
                  width: "191px",
                  backgroundColor: "#EBE8D3",
                }}
              >
                <Card.Body>
                  <Card.Text
                    style={{
                      fontSize: "12px",
                      marginTop: "70px",
                      textAlign: "center",
                      fontWeight: "500",
                    }}
                  >
                    Fique em casa e use os serviços locais e dos pequenos
                    empreendedores de sua região!
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "243px",
                  height: "245px",
                  backgroundColor: "#EBE8D3",
                }}
              >
                <Card.Body>
                  <Card.Text
                    style={{
                      fontSize: "16px",
                      textAlign: "center",
                      marginTop: "120px",
                      fontWeight: "500",
                    }}
                  >
                    Visitando nossos clientes, e indo de encontro aos trabalhos
                    e estabelecimento deles!
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  height: "181px",
                  width: "191px",
                  backgroundColor: "#EBE8D3",
                  fontWeight: "500",
                }}
              >
                <Card.Body>
                  <Card.Text
                    style={{
                      fontSize: "12px",
                      marginTop: "100px",
                      textAlign: "center",
                    }}
                  >
                    Junte-se aos nossos patrocionadores!
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div>
        <img
          alt="people"
          src={people}
          style={{
            width: "100%",
            height: "612px",
            objectFit: "cover",
            zIndex: -1,
            position: "absolute",
          }}
        />
        <p
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: "#fff",
            width: 547,
            textDecoration: "uppercase",
          }}
        >
          CONHEÇA NOSSO PROJETO COM AMBULANTES DE RUA
        </p>

        <div
          style={{
            display: "flex",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            marginTop: 288,
            height: "218px",
          }}
        >
          <div style={{ width: "70%", padding: "28px 83px 51px 83px" }}>
            <p
              style={{
                fontSize: 18,
                fontWeight: 800,
                color: "#CEAC0F",
                fontStyle: "italic",
              }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
              sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
              quisquam est, qui dolorem ipsum, quia dolor sit, amet,
              consectetur, adipisci velit, sed quia non numquam eius mod
            </p>
          </div>
          <div>
            <Button
              style={{
                width: 217,
                marginTop: 76,
                backgroundColor: "rgba(0, 0, 0, 0.62)",
                border: 0,
                borderradius: 10,
                fontSize: 18,
                fontWeight: 800,
                color: "#CEAC0F",
                fontStyle: "italic",
              }}
              onClick={() => history.push("/secondary-home")}
            >
              Clique aqui para saber mais
            </Button>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#353535", height: "771px" }}>
        <div
          style={{
            padding: "66px 68px 0 65px",
          }}
        >
          <h2 style={{ fontWeight: 700, color: "#fff", marginBottom: "72px" }}>
            ONDE NOS ENCONTRAR
          </h2>

          <img
            src={flag}
            alt="flag logo"
            style={{
              marginLeft: "100px",
              width: "1191px",
              height: "488px",
              objectFit: "center",
            }}
          />
        </div>
      </div>

      <div
        style={{ backgroundColor: "#F8E85A", height: "611px", paddingTop: 56 }}
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
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "76px 50px",
                height: "300px",
              }}
            >
              <Card
                style={{
                  height: "211px",
                  width: "191px",
                  backgroundColor: "#EBE8D3",
                }}
              >
                <Card.Img
                  variant="top"
                  src={podcastBanner}
                  style={{
                    width: "110px",
                    height: "110px",
                    marginLeft: 40,
                    marginTop: 15,
                  }}
                />
                <Card.Body>
                  <Card.Text
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      fontWeight: "500",
                    }}
                  >
                    Propagando patrocinador 1
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "243px",
                  height: "245px",
                  backgroundColor: "#EBE8D3",
                }}
              >
                <Card.Img
                  variant="top"
                  src={podcastBanner}
                  style={{
                    width: "140px",
                    height: "140px",
                    marginLeft: 50,
                    marginTop: 15,
                  }}
                />
                <Card.Body>
                  <Card.Text
                    style={{
                      fontSize: "18px",
                      textAlign: "center",
                      marginTop: "5px",
                      fontWeight: "500",
                    }}
                  >
                    Acompanhe nossos Podcats no Spotify
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  height: "211px",
                  width: "191px",
                  backgroundColor: "#EBE8D3",
                }}
              >
                <Card.Img
                  variant="top"
                  src={podcastBanner}
                  style={{
                    width: "110px",
                    height: "110px",
                    marginLeft: 40,
                    marginTop: 15,
                  }}
                />
                <Card.Body>
                  <Card.Text
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      fontWeight: "500",
                    }}
                  >
                    Propagando patrocinador 3
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "76px 50px",
                height: "300px",
              }}
            >
              <Card
                style={{
                  height: "211px",
                  width: "191px",
                  backgroundColor: "#EBE8D3",
                }}
              >
                <Card.Img
                  variant="top"
                  src={podcastBanner}
                  style={{
                    width: "110px",
                    height: "110px",
                    marginLeft: 40,
                    marginTop: 15,
                  }}
                />
                <Card.Body>
                  <Card.Text
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      fontWeight: "500",
                    }}
                  >
                    Propagando patrocinador 1
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "243px",
                  height: "245px",
                  backgroundColor: "#EBE8D3",
                }}
              >
                <Card.Img
                  variant="top"
                  src={podcastBanner}
                  style={{
                    width: "140px",
                    height: "140px",
                    marginLeft: 50,
                    marginTop: 15,
                  }}
                />
                <Card.Body>
                  <Card.Text
                    style={{
                      fontSize: "18px",
                      textAlign: "center",
                      marginTop: "5px",
                      fontWeight: "500",
                    }}
                  >
                    Acompanhe nossos Podcats no Spotify
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  height: "211px",
                  width: "191px",
                  backgroundColor: "#EBE8D3",
                }}
              >
                <Card.Img
                  variant="top"
                  src={podcastBanner}
                  style={{
                    width: "110px",
                    height: "110px",
                    marginLeft: 40,
                    marginTop: 15,
                  }}
                />
                <Card.Body>
                  <Card.Text
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      fontWeight: "500",
                    }}
                  >
                    Propagando patrocinador 3
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "76px 50px",
                height: "300px",
              }}
            >
              <Card
                style={{
                  height: "211px",
                  width: "191px",
                  backgroundColor: "#EBE8D3",
                }}
              >
                <Card.Img
                  variant="top"
                  src={podcastBanner}
                  style={{
                    width: "110px",
                    height: "110px",
                    marginLeft: 40,
                    marginTop: 15,
                  }}
                />
                <Card.Body>
                  <Card.Text
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      fontWeight: "500",
                    }}
                  >
                    Propagando patrocinador 1
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  width: "243px",
                  height: "245px",
                  backgroundColor: "#EBE8D3",
                }}
              >
                <Card.Img
                  variant="top"
                  src={podcastBanner}
                  style={{
                    width: "140px",
                    height: "140px",
                    marginLeft: 50,
                    marginTop: 15,
                  }}
                />
                <Card.Body>
                  <Card.Text
                    style={{
                      fontSize: "18px",
                      textAlign: "center",
                      marginTop: "5px",
                      fontWeight: "500",
                    }}
                  >
                    Acompanhe nossos Podcats no Spotify
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card
                style={{
                  height: "211px",
                  width: "191px",
                  backgroundColor: "#EBE8D3",
                }}
              >
                <Card.Img
                  variant="top"
                  src={podcastBanner}
                  style={{
                    width: "110px",
                    height: "110px",
                    marginLeft: 40,
                    marginTop: 15,
                  }}
                />
                <Card.Body>
                  <Card.Text
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      fontWeight: "500",
                    }}
                  >
                    Propagando patrocinador 3
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
