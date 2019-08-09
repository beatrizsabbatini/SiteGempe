import React, { Component } from "react";
import "./styles.css";
import Navigation from "../../Components/Navigation";
import Header from "../../Components/Header";
import About from "../../Components/About";
import Services from "../../Components/Services";
import Clients from "../../Components/Clients";
import Budget from "../../Components/Budget";
import SeeMore from "../../Components/SeeMore";
import Contact from "../../Components/Contact";

class Main extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Header />
        <About />
        <Services />
        <About />
        <Clients />
        <Budget />
        <SeeMore />
        <Contact />
      </>
    );
  }
}

export default Main;
