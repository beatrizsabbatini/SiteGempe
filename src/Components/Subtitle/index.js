import React from "react";
import "./styles.css";

const Subtitle = props => {
  return <h2 className={props.subtitle}>{props.children}</h2>;
};

export default Subtitle;
