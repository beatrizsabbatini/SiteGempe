import React from "react";
import "./styles.css";
import "../../reset.css";
import "../Container";
import Title from "../Title";
import Container from "../Container";

const MENU_ITENS = [
  {
    link: "#services",
    name: "o que fazemos"
  },
  {
    link: "#portfolio",
    name: "portfolio"
  },
  {
    link: "#budget",
    name: "orçamento"
  },
  {
    link: "#contact",
    name: "contato"
  }
];

const Navbar = () => {
  return (
    <Container cont="container_navBar">
      <Title title="logo">Gempe.</Title>
      <nav class="nav">
        {MENU_ITENS.map((menu, index) => (
          <a className="item" key={index} href={menu.link}>
            {menu.name}
          </a>
        ))}
      </nav>
    </Container>
  );
};

export default Navbar;
