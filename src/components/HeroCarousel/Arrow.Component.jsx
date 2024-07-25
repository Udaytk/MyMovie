import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export const NextArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{ ...props.style }}
      onClick={props.onClick}
    >
      <FaArrowRight />
    </div>
  );
};

export const PrevArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{ ...props.style }}
      onClick={props.onClick}
    >
      <FaArrowLeft />
    </div>
  );
};
