import React from "react";
import "./styles.css";
import Title from "../Title";
import Container from "../Container";
import Subtitle from "../Subtitle";
import case1 from "../Images/celularzao.png";
import case2 from "../Images/lacre21.png";
import case3 from "../Images/minnut-case.png";
import case4 from "../Images/motosinal-case.png";

const ITENS_CASE = [
  {
    title_case: "Urpay",
    subtitle_case: "Conta Digital",
    subtitle2_case: "O QUE FIZEMOS",
    itens: ["App Android", "App iOS", "Layout", "Integração com API"],
    img: case1,
    subtitle3_case: "Disponível para",
    itens2: ["Android", "Web"]
  },
  {
    title_case: "Lacre 21",
    subtitle_case: "Marketplace para Cosméticos Lacre 21",
    subtitle2_case: "O QUE FIZEMOS",
    itens: ["PWA", "API/Backend", "Design"],
    img: case2,
    subtitle3_case: "Disponível para",
    itens2: ["Web"]
  },
  {
    title_case: "Minnut",
    subtitle_case: "Encontre pessoas na mesma sintonia de pensamento",
    subtitle2_case: "O QUE FIZEMOS",
    itens: ["App Android", "App iOS", "Web", "API/Backend", "Design"],
    img: case3,
    subtitle3_case: "Disponível para",
    itens2: ["Android", "iOS", "Web"]
  },
  {
    title_case: "Moto Sinal",
    subtitle_case: "Acione mototáxi e motoboy",
    subtitle2_case: "O QUE FIZEMOS",
    itens: ["App Android", "App iOS", "Web", "API/Backend", "Design"],
    img: case4,
    subtitle3_case: "Disponível para",
    itens2: ["Android", "iOS", "Web"]
  }
];

const Clients = () => {
  return (
    <>
      {ITENS_CASE.map((menu, index) => (
        <>
          <Container cont="container_clients" key={index}>
            <Container cont="container1_clients">
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
              <Container cont="container_oquefizemos">
                <p className="item" key={index}>
                  {menu.itens}
                </p>
              </Container>
              <Subtitle subtitle="subtitle2_clients" key={index}>
                {menu.subtitle3_case}
              </Subtitle>
              <hr />
              <Container cont="container_disponivelpara">
                <p className="item2" key={index}>
                  {menu.itens2}
                </p>
              </Container>
            </Container>
            <Container cont="container_imgClients">
              <img className="img_clients" src={menu.img} alt="img" />
            </Container>
          </Container>
        </>
      ))}
    </>
  );
};

export default Clients;
