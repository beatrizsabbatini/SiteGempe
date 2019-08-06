import React, { Component } from "react";
import "./styles.css";
import Container from "../Container";
import Title from "../Title";
import Subtitle from "../Subtitle";

class Services extends Component {
  render() {
    return (
      <>
        <Container cont="container_services">
          <Title title="title_servicos">Nossos serviços</Title>
          <hr />
          <Subtitle subtitle="subtitle_services">
            {" "}
            Construímos negócios com potencial global
          </Subtitle>
        </Container>
      </>
    );
  }
}

export default Services;
