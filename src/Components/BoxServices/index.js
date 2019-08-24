import React from "react";
import "./styles.css";
import Container from "../Container";
import Title from "../Title";
import Subtitle from "../Subtitle";

const BoxServices = ({ images, title_sprint, subtitle_sprint }) => {
  return (
    <Container cont="container_boxServices">
      <img src={images} className="sprint" alt="fundo"></img>
      <Container cont="container_sprint">
        <Title title="title_sprint">{title_sprint}</Title>
        <Subtitle subtitle="subtitle_sprint">{subtitle_sprint}</Subtitle>
      </Container>
    </Container>
  );
};

export default BoxServices;
