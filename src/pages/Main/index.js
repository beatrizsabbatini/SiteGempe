import React, { Component } from "react";
import Navigation from "../../Components/Navigation";
import Header from "../../Components/Header";
import About from "../../Components/About";
import Services from "../../Components/Services";

import "./styles.css";

class Main extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Header />
        <About />
        <Services />
        <About />
      </>
    );
  }
}

export default Main;
