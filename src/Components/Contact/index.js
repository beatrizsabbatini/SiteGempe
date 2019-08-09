import React, { Component } from "react";
import "./styles.css";
import Container from "../Container";
import Subtitle from "../Subtitle";
import Title from "../Title";
import face from "../Images/facebook.png";
import linkedin from "../Images/linkedin.png";
import whats from "../Images/whatsapp.png";
import twitter from "../Images/twitter.png";
import phone from "../Images/telephone-handle-silhouette .png";
import email from "../Images/mail.png";

class Contact extends Component {
  render() {
    return (
      <Container cont="container_contact">
        <Subtitle subtitle="subtitle_contact">
          Somos experts em apps e soluções web. Construímos negócios com
          potencial global.{" "}
        </Subtitle>
        <Container cont="container_social">
          <Title title="title_contact">Redes Sociais</Title>
          <Container cont="container_icones">
            <img className="social" src={face} alt="facebook" />
            <img className="social" src={linkedin} alt="linkedin" />
            <img className="social" src={twitter} alt="twitter" />
            <img className="social" src={whats} alt="whats" />
          </Container>
          <hr className="hr" />
          <Subtitle subtitle="subtitle_contact2">
            Cornélio Procópio / PR, Brasil
          </Subtitle>
        </Container>
        <Container cont="container_contact2">
          <Title title="title_contact2">Contato</Title>
          <Container cont="container_phone">
            <img className="phone" src={phone} alt="phone" />
            <Subtitle subtitle="subtitle_contact2">+55 (43) 3132-0686</Subtitle>
          </Container>
          <Container cont="container_phone">
            <img className="email" src={email} alt="email" />
            <Subtitle subtitle="subtitle_contact3">
              comercial@gempe.com.br
            </Subtitle>
          </Container>
        </Container>
      </Container>
    );
  }
}

export default Contact;
