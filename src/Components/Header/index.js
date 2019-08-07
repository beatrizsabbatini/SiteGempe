import React, { Component } from "react";
import home from "../Images/bkg-home.8be80019c9dae2ac8cdc.jpg";
import "./styles.css";
import Subtitle from "../Subtitle";
import Container from "../Container";
import Title from "../Title";

class Header extends Component {
  render() {
    return (
      <Container cont="container_header">
        <img src={home} alt="plano_de_fundo_home" className="home" />
        <Container cont="itens_header">
          <Title title="title_header">Aplicativo para o seu negócio</Title>
          <Subtitle subtitle="subtitle_header">
            Design, desenvolvimento de apps e aplicações web
          </Subtitle>
          <Container cont="header_buttons">
            <a class="button1" href="www.google.com">
              Quero um aplicativo
            </a>
            <a class="button2" href="www.google.com">
              Conheça a Gempe
            </a>
          </Container>
        </Container>
      </Container>
    );
  }
}

export default Header;
