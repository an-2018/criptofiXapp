import React, { useState } from "react";
import { Container } from "./styles";

export const Wellcome = () => {
  const ethereum = window.ethereum;

  const [addr, setAddr] = useState("");

  if (ethereum) {
    ethereum.on("accountsChanged", function(accounts) {
      setAddr(accounts[0]);
    });
  }

  return (
    <Container>
      <div className="App">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Welcome to CryptoFix</h1>
        <h3>Connect your wallet and jump into DeFi</h3>
        <br />
        <br />
        {ethereum && (
          <a href="https://metamask.online/" target="_blank">
            <Button
              type="button"
              buttonStyle="btn--primary--outline"
              buttonSize="btn--large"
            >
              Connect to Metamask
            </Button>
          </a>
        )}
        <br />
        {ethereum && <p>Your Ethereum address: {addr}</p>}
        {!ethereum && (
          <p style={{ color: "red" }}>
            Please use a browser that supports MetaMask wallet
          </p>
        )}
      </div>
    </Container>
  );
};
