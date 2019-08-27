import React from "react";
import "./styles.css";
import "../../reset.css";
import "../Container";
import logo from "../../Assets/Images/logo-gempe.svg";
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
      <img src={logo} alt="logo" className="logoGempe"></img>
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
