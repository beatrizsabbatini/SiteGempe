import React, { Component } from "react";
import "./styles.css";
import Container from "../Container";
import Title from "../Title";
import Subtitle from "../Subtitle";

class Budget extends Component {
  render() {
    return (
      <Container cont="container_budget">
        <Title title="title_budget">Gostou do que viu?</Title>
        <Subtitle subtitle="subtitle_budget">
          Podemos fazer o mesmo pela sua idéia. Converse com a gente sobre seu
          projeto.
        </Subtitle>
        <a className="button_budget" href="www.google.com" alt="orçamento">
          Quero um orçamento
        </a>
      </Container>
    );
  }
}

export default Budget;
