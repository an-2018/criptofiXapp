import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export const HomeImageTech = props => {
  return (
    <Link to={props.url}>
      <img src={props.name} alt={props.name} />
    </Link>
  );
};
