import React from "react";
import "./styles.css";

const Title = props => {
  return <h1 className={props.title}>{props.children}</h1>;
};

export default Title;
