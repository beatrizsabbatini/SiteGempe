import React from "react";
import "./styles.css";
import Container from "../Container";
import Title from "../Title";
import Subtitle from "../Subtitle";

const Teste = ({ title_about, subtitle_about }) => {
  return (
    <Container cont="container_about">
      <Title title="title_about">{title_about}</Title>
      <Subtitle subtitle="subtitle_about">{subtitle_about}</Subtitle>
    </Container>
  );
};

export default Teste;
