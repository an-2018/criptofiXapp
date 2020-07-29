import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyles/GlobalStyle";

import { Home } from "./Pages/Home";
import { Deposit } from "./Pages/Deposit";
import { Borrow } from "./Pages/Borrow";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route exact path="/borrow">
            <Borrow />
          </Route>

          <Route exact path="/deposit">
            <Deposit />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <GlobalStyle />
      </Router>
    </>
  );
}

/* 
  const ethereum = window.ethereum;

  const [addr, setAddr] = useState("");

  if (ethereum) {
    ethereum.on("accountsChanged", function(accounts) {
      setAddr(accounts[0]);
    });
  }

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
*/
