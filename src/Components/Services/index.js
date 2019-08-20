import React, { Component } from "react";
import "./styles.css";
import Container from "../Container";
import Title from "../Title";
import Subtitle from "../Subtitle";
import sprint from "../../Assets/Images/design-sprint.jpg";
import mvp from "../../Assets/Images/mvp.jpg";
import apps from "../../Assets/Images/apps.jpg";

class Services extends Component {
  render() {
    return (
      <section id="services">
        <Container cont="container_services">
          <Title title="title_servicos">Nossos serviços</Title>
          <hr className="line_services" />
          <Subtitle subtitle="subtitle_services">
            {" "}
            Construímos negócios com potencial global
          </Subtitle>
          <Container cont="servicos">
            <Container>
              <img src={sprint} alt="plano_de_fundo_home" className="sprint" />
              <Container>
                <Container cont="container_sprint">
                  <Title title="title_sprint">Design Sprint</Title>
                  <Subtitle subtitle="subtitle_sprint">
                    Aplique a metodologia utilizada pela Google para criação de
                    novos negócios através de design e teste com usuários.
                  </Subtitle>
                </Container>
              </Container>
            </Container>
            <Container>
              <img src={mvp} alt="plano_de_fundo_home" className="mvp" />
              <Container cont="container_sprint">
                <Title title="title_sprint">MVP Express</Title>
                <Subtitle subtitle="subtitle_mvp">
                  Tenha o Mínimo Produto Viável para sua ideia em 4 semanas
                  contando com nosso time de experts.
                </Subtitle>
              </Container>
            </Container>
            <Container>
              <img src={apps} alt="plano_de_fundo_home" className="apps" />
              <Container cont="container_sprint">
                <Title title="title_sprint">Aplicativos e PWAs</Title>
                <Subtitle subtitle="subtitle_apps">
                  Desenvolvemos Progressive Web Apps, Aplicativos nativos e
                  híbridos para Android e iOS.
                </Subtitle>
              </Container>
            </Container>
          </Container>
        </Container>
      </section>
    );
  }
}

export default Services;
