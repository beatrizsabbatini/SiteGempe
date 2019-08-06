import React, { Component } from "react";
import home from "../Images/bkg-home.8be80019c9dae2ac8cdc.jpg";
import "./styles.css";
import Subtitle from "../Subtitle";
import Container from "../Container";
import Title from "../Title";

class Header extends Component {
  render() {
    return (
      <>
        <Container cont="container_header">
          <Container>
            <img src={home} alt="plano_de_fundo_home" className="home" />
            <Title title="title_header">Aplicativo para o seu negócio</Title>
            <Subtitle>
              Design, desenvolvimento de apps e aplicações web
            </Subtitle>
          </Container>
        </Container>
      </>
    );
  }
}

export default Header;
