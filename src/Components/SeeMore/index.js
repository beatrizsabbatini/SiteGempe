import React, { Component } from "react";
import "./styles.css";
import Container from "../Container";
import Title from "../Title";

class SeeMore extends Component {
  render() {
    return (
      <Container cont="container_seeMore">
        <Title title="title_seeMore">Veja Mais</Title>
        <hr className="line_seeMore" />
        <a className="button_seeMore" href="www.google.com" alt="orçamento">
          Ver Portfolio completo
        </a>
      </Container>
    );
  }
}

export default SeeMore;
