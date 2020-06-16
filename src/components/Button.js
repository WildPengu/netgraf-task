import React from "react";
import "../styles/components/Button.css";

const Button = (props) => {
  return <div className="red-button">{props.value}</div>;
};

export default Button;
