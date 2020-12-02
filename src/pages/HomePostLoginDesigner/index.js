import React, { useState } from "react";
import { Card, Carousel, Table } from "react-bootstrap";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

export default function HomePostLoginDesigner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
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
          nextIcon={<BsCaretRightFill size="3.5rem" color="#fff" />}
          prevIcon={<BsCaretLeftFill size="3.5rem" color="#fff" />}
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
          backgroundColor: "#F8E85A",
          display: "flex",
          paddingTop: "30px",
        }}
      >
        <div style={{ width: "45%" }}>
          <Table
            striped
            bordered
            hover
            style={{ border: "35px solid #353535", borderRadius: 40 }}
          >
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Jacob</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}
