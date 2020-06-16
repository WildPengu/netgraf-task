import React from "react";
import "../styles/components/ActivityCircle.css";

const ActivityCircle = (props) => {
  return <div className="red-circle">{props.value}</div>;
};

export default ActivityCircle;
