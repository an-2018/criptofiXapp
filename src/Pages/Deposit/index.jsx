import React from "react";
import { DepositHeader } from "../../components/Deposit/DepositHeader";
import { DepositDescription } from "../../components/Deposit/DepositDescription";
import { Grid } from "../../components/LayoutApp/styles";
import { SideMenu } from "../../components/SideMenu";
import { CardInfo } from "../../components/CardInfo";
import { Button } from "../../components/Button";
import { Container, ContainerCard } from "./styles";
import { InputField } from "../../components/InputField";
export const Deposit = () => {
  return (
    <>
      <Grid>
        <SideMenu />
        <DepositHeader />
        <DepositDescription />
        <Container>
          <ContainerCard>
            <CardInfo />
          </ContainerCard>

          <InputField title="Description" />
          <InputField title="Value" />

          <div className="maxwidth">
            <Button buttonSize="btn--custom">Submit</Button>
          </div>
        </Container>
      </Grid>
    </>
  );
};
