import React, { Component } from "react";
import "./styles.css";
import Navigation from "../../Components/Navigation";
import Header from "../../Components/Header";
import About from "../../Components/About";
import Services from "../../Components/Services";
import Cases from "../../Components/Cases";
import Budget from "../../Components/Budget";
import SeeMore from "../../Components/SeeMore";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
import BoxServices from "../../Components/BoxServices";

class Main extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Header />
        <About
          title_about="Somos experts em apps"
          subtitle_about="Atuamos desde a ideia até a operação do seu produto."
        />
        <Services />
        <About
          title_about="CONHEÇA NOSSOS CASES"
          subtitle_about="Somos comprometidos a empoderar nossos atuais e futuros parceiros!"
        />
        <Cases />
        <Budget />
        <SeeMore />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default Main;
