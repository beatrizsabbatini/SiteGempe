import React from "react";
import Title from "../Title";
import "./styles.css";
import Subtitle from "../Subtitle";
import Container from "../Container";

const Cases = props => {
  return (
    <Container cont="container_case">
      <Title className={props.title_case}>{props.children}</Title>
      <Subtitle className={props.subtitle_case}>{props.children}</Subtitle>
    </Container>
  );
};

export default Cases;
