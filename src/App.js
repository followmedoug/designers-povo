import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Router, Link } from "react-router-dom";
import { BsJustify } from "react-icons/bs";
import Modal from "react-modal";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import history from "./services/history";
import Routes from "./routes";
import logoAmarelo from "./assets/images/logoAmarelo.png";
import logoPreto from "./assets/images/LogoPreto.png";
import "./App.css";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "890px",
    height: "528px",
    overflow: "visible",
    padding: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
};

Modal.setAppElement("#root");

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Router history={history}>
        <Navbar
          expand="lg"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            height: "49px",
            zIndex: 1,
            position: "absolute",
            width: "100%",
          }}
        >
          <Navbar.Brand style={{ color: "#F8E85A" }} href="/home">
            DESIGNERS DO POVO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Container
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight: 0,
              }}
            >
              <Nav style={{ alignItems: "center" }}>
                <Nav.Link
                  style={{ color: "#F8E85A", fontSize: "24px" }}
                  href="#home"
                  onClick={() => setIsOpen(true)}
                >
                  Inscreva-se
                </Nav.Link>
                <NavDropdown
                  title={
                    <span
                      style={{
                        color: "#D9CB48",
                        fontSize: "24px",
                      }}
                    >
                      Login
                    </span>
                  }
                  id="login-dropdown"
                  drop="down"
                >
                  <NavDropdown.Item href="/login-designer">
                    Designer
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/login-merchant">
                    Comerciante
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  style={{ color: "#F8E85A", fontSize: "24px" }}
                  href="#home"
                >
                  Linguas
                </Nav.Link>
                <Nav.Link
                  style={{ color: "#F8E85A", fontSize: "24px" }}
                  href="#link"
                >
                  Linguas
                </Nav.Link>
                <NavDropdown
                  title={<BsJustify size="2rem" color="#D9CB48" />}
                  id="basic-nav-dropdown"
                  drop="down"
                  style={{ marginRight: 80 }}
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Navbar>

        <Modal isOpen={isOpen} style={customStyles}>
          <div style={{ display: "flex" }}>
            <div
              onClick={() => setIsOpen(false)}
              style={{
                width: "51%",
                height: "528px",
                backgroundColor: "#F8E85A",
              }}
            >
              <Link to="/merchant-register">
                <img
                  alt="logo1"
                  src={logoAmarelo}
                  style={{
                    width: "305px",
                    height: "305,5px",
                    marginLeft: "60px",
                    marginTop: "100px",
                  }}
                />
                <p
                  style={{
                    textDecoration: "none",
                    fontSize: "40px",
                    fontWeight: 700,
                    color: "#000",
                    textAlign: "center",
                  }}
                >
                  COMERCIANTE
                </p>
              </Link>
            </div>
            <div
              style={{
                width: "51%",
                height: "528px",
                backgroundColor: "#353535",
              }}
              onClick={() => setIsOpen(false)}
            >
              <Link to="/designer-register">
                <img
                  alt="logo2"
                  src={logoPreto}
                  style={{
                    width: "305px",
                    height: "305,5px",
                    marginLeft: "60px",
                    marginTop: "100px",
                  }}
                />
                <p
                  style={{
                    textDecoration: "none",
                    fontSize: "40px",
                    fontWeight: 700,
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  Designer
                </p>
              </Link>
            </div>
          </div>
        </Modal>
        <Routes />
      </Router>
    </>
  );
}

export default App;
