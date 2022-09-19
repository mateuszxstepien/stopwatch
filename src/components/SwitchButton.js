import React from "react";
import "./SwitchButton.css";

const SwitchButton = (props) => {
  return (
    <>
      <button onClick={props.click}>{props.name}</button>
    </>
  );
};

export default SwitchButton;
