import React from "react";
import { Container, Button } from "./styles";
import deposit1 from "../../assets/icons/deposit1.svg";
import borrow1 from "../../assets/icons/borrow1.svg";
import settings from "../../assets/icons/settings.svg";
import home_icon from "../../assets/icons/home_icon.svg";
import { Footer } from "./styles";
import { Link } from "react-router-dom";

export const SideMenu = () => {
  return (
    <>
      <Container>
        <Link to="/home">
          <IconButton name={home_icon} descriprion={"Home"} />
        </Link>

        <Link to="/deposit">
          <IconButton name={deposit1} descriprion={"Desposit"} />
        </Link>

        <Link to="/borrow">
          <IconButton name={borrow1} descriprion={"Borrow"} />
        </Link>
      </Container>
      <Footer>
        <IconButton
          settings
          className="imag"
          name={settings}
          descriprion={"Settigs"}
        />
      </Footer>
    </>
  );
};

const IconButton = props => {
  return (
    <Button settings={props.settings}>
      <img className="image" src={props.name} alt={props.descriprion} />
    </Button>
  );
};
