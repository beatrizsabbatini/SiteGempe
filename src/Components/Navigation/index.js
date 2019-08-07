import React from "react";
import "./styles.css";
import "../../reset.css";
import "../Container";
import Title from "../Title";
import Container from "../Container";
const Navbar = () => {
  return (
    <>
      <Container cont="container_navBar">
        <Title title="logo">Gempe.</Title>
        <nav class="nav">
          <a className="item" href="#services">
            o que fazemos
          </a>
          <a className="item" href="#portfolio">
            portfolio
          </a>
          <a className="orcamento" href="#budget">
            orçamento
          </a>
          <a className="item" href="#contact">
            contato
          </a>
        </nav>
      </Container>
    </>
  );
};

export default Navbar;
