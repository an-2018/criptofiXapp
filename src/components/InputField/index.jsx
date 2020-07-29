import React from "react";
import { Field, Input } from "rimble-ui";
import { Container } from "./styles";
export const InputField = props => {
  return (
    <Container>
      <field label="Deposit">
        {props.title}
        <div className="field">
          <input required={true} />
        </div>
      </field>
    </Container>
  );
};
