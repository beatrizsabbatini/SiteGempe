import React, { Component } from "react";
import "./styles.css";
import Title from "../Title";
import Container from "../Container";
import Subtitle from "../Subtitle";

class About2 extends Component {
  render() {
    return (
      <>
        <Container cont="container_about">
          <Title title="title_about">CONHEÇA NOSSOS CASES</Title>
          <Subtitle subtitle="subtitle_about">
            Somos comprometidos a empoderar nossos atuais e futuros parceiros!
          </Subtitle>
        </Container>
      </>
    );
  }
}

export default About2;
