import React, { Component } from "react";
import "./styles.css";
import Container from "../Container";
import Title from "../Title";
import Subtitle from "../Subtitle";
import BoxServices from "../BoxServices";
import sprint from "../../Assets/Images/design-sprint.jpg";
import mvp from "../../Assets/Images/mvp.jpg";
import apps from "../../Assets/Images/apps.jpg";

class Services extends Component {
  render() {
    return (
      <section id="services">
        <Container cont="container_services">
          <Container>
          <Title title="title_servicos">Nossos serviços</Title>
          <hr className="line_services" />
          <Subtitle subtitle="subtitle_services">
            {" "}
            Construímos negócios com potencial global
          </Subtitle>
          </Container>
          <Container cont="servicos">
            <BoxServices
              images={sprint}
              title_sprint="Design Sprint"
              subtitle_sprint="Aplique a metodologia utilizada pela Google para criação de
         novos negócios através de design e teste com usuários."
            ></BoxServices>
            <BoxServices
              images={mvp}
              title_sprint="MVP Express"
              subtitle_sprint="Tenha o Mínimo Produto Viável para sua ideia em 4 semanas
         contando com nosso time de experts."
            ></BoxServices>
            <BoxServices
              images={apps}
              title_sprint="Aplicativos e PWAs"
              subtitle_sprint="Desenvolvemos Progressive Web Apps, Aplicativos nativos e
       híbridos para Android e iOS."
            ></BoxServices>
          </Container>
        </Container>
      </section>
    );
  }
}

export default Services;

/*     title_sprint="Design Sprint"
            subtitle_sprint="Aplique a metodologia utilizada pela Google para criação de
         novos negócios através de design e teste com usuários."
            title_sprint2="MVP Express"
            subtitle_mvp="Tenha o Mínimo Produto Viável para sua ideia em 4 semanas
          contando com nosso time de experts."
            title_sprint3="Aplicativos e PWAs"
            subtitle_apps="Desenvolvemos Progressive Web Apps, Aplicativos nativos e
          híbridos para Android e iOS."*/
