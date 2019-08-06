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
          <a href="#services">o que fazemos</a>
          <a href="#portfolio">portfolio</a>
          <a href="#budget">orçamento</a>
          <a href="#contact">contato</a>
        </nav>
      </Container>
    </>
  );
};

export default Navbar;
