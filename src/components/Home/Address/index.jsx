import React from "react";
import { EthAddress } from "rimble-ui";
import { Container } from "./styles";

export const Address = props => {
  return (
    <Container>
      <EthAddress address={props.address} />
    </Container>
  );
};
