import React from "react";
import "./styles.css";
import Container from "../Container";
import Title from "../Title";
import Subtitle from "../Subtitle";
import sprint from "../../Assets/Images/design-sprint.jpg";
import mvp from "../../Assets/Images/mvp.jpg";
import apps from "../../Assets/Images/apps.jpg";

const BoxServices = ({ images, title_sprint, subtitle_sprint }) => {
  return (
    <Container cont="servicos">
      <Container>
        <Container>
          <Container cont="container_sprint">
            <img src={images} alt="fundo"></img>
            <Title title="title_sprint">{title_sprint}</Title>
            <Subtitle subtitle="subtitle_sprint">{subtitle_sprint}</Subtitle>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default BoxServices;

/*  <img src={sprint} alt="plano_de_fundo_home" className="sprint" />
    <img src={mvp} alt="plano_de_fundo_home" className="sprint" />
    <img src={apps} alt="plano_de_fundo_home" className="sprint" />

    */
