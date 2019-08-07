import React, { Component } from "react";
import "./styles.css";
import Title from "../Title";
import Container from "../Container";
import Subtitle from "../Subtitle";

class About extends Component {
  render() {
    return (
      <>
        <Container cont="container_about">
          <Title title="title_about">Somos experts em apps</Title>
          <Subtitle subtitle="subtitle_about">
            Atuamos desde a ideia até a operação do seu produto
          </Subtitle>
        </Container>
      </>
    );
  }
}

export default About;
