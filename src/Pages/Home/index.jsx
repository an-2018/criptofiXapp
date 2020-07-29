import React, { useState } from "react";
import { ContainerTech, Container, Grid } from "./styles";
import { HomeHeader } from "../../components/Home/HomeHeader";
import { HomeDescription } from "../../components/Home/HomeDescription";
import { HomeMetamaskButton } from "../../components/Home/HomeMetamaskButton";
import { HomeFooterText } from "../../components/Home/HomeFooterText";
import { Address } from "../../components/Home/Address";
import { Button } from "../../components/Button";
import { ConnectionBanner } from "../../components/ConnectionBanner";

import aave from "../../assets/aave.png";
import metamask from "../../assets/metamask.png";
import ethereumimg from "../../assets/ethereum.png";

export const Home = () => {
  const ethereum = window.ethereum;

  const [addr, setAddr] = useState("");
  //const web3 = new Web3(Web3.givenProvider);

  if (ethereum) {
    ethereum.on("accountsChanged", function(accounts) {
      setAddr(accounts[0]);
    });
  }
  const handleGetAcount = async e => {
    const accounts = await ethereum.enable();
    const account = accounts[0];
    setAddr(account);
  };

  return (
    <>
      <Grid>
        <Container>
          <HomeHeader />
          <HomeDescription />
          <HomeMetamaskButton
            handleGetAcount={handleGetAcount}
            addr={addr}
            ethereum={ethereum}
          />
          {ethereum && <Address address={addr} />}
          {!ethereum && (
            <>
              <ConnectionBanner />
              {/* <p style={{ color: "red" }}>
                <br />
                <br />
                Please use a browser that supports Metamask wallet
              </p> */}
            </>
          )}
          <HomeFooterText />
          <br />
          <br />
          <div className="maxwidth">
          {addr && (
            <a href="https://05mvi.csb.app/deposit">
              <Button
                type="button"
                buttonStyle="btn--success--solid"
                buttonSize="btn--large"
              >
                Continue to CryptoFix
              </Button>
            </a>
          )}
          </div>
        </Container>
        <ContainerTech>
          <a href="https://aave.com/">
            <img src={aave} alt={aave} />
          </a>
          <a href="https://ethereum.org/en/">
            <img src={ethereumimg} alt={ethereumimg} />
          </a>
          <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">
            <img src={metamask} alt={metamask} />
          </a>
        </ContainerTech>
      </Grid>
    </>
  );
};

/* <HomeImageTech name={aave} url="https://aave.com/" />
          <HomeImageTech name={ethereumimg} url="https://ethereum.org/en/" />
          <HomeImageTech
            name={metamask}
            url="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
          /> */
