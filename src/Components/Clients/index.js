import React from "react";
import "./styles.css";
import Title from "../Title";
import Container from "../Container";
import Subtitle from "../Subtitle";

const ITENS_CASE = [
  {
    title_case: "Urpay",
    subtitle_case: "Conta Digital",
    subtitle2_case: "O QUE FIZEMOS"
  },
  {
    title_case: "Lacre 21",
    subtitle_case: "Marketplace para Cosméticos Lacre 21",
    subtitle2_case: "O QUE FIZEMOS"
  },
  {
    title_case: "Minnut",
    subtitle_case: "Encontre pessoas na mesma sintonia de pensamento",
    subtitle2_case: "O QUE FIZEMOS"
  },
  {
    title_case: "Moto Sinal",
    subtitle_case: "Acione mototáxi e motoboy",
    subtitle2_case: "O QUE FIZEMOS"
  }
];

const Clients = () => {
  return (
    <>
      {ITENS_CASE.map((menu, index) => (
        <>
          <Container cont="container_clients" key={index}>
            <Title title="title_clients" key={index}>
              {menu.title_case}
            </Title>
            <Subtitle subtitle="subtitle_clients" key={index}>
              {menu.subtitle_case}
            </Subtitle>
            <Subtitle subtitle="subtitle2_clients" key={index}>
              {menu.subtitle2_case}
            </Subtitle>
            <hr />
          </Container>
        </>
      ))}
    </>
  );
};

export default Clients;
