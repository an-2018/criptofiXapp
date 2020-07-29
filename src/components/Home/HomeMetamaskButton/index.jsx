import React, { useState } from "react";
import { ButtonArea } from "./styles";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

export const HomeMetamaskButton = props => {
  return (
    <ButtonArea>
      <div id="page-home">
        <div className="content">
          <header />

          <main>
            {props.ethereum && (
              <Link to="/" onClick={props.handleGetAcount}>
                <span>
                  <FiLogIn />
                </span>
                <strong>Connect Wallet</strong>
              </Link>
            )}
            {!props.ethereum && (
              <Link to="/">
                <span>
                  <FiLogIn />
                </span>
                <strong>Connect Wallet</strong>
              </Link>
            )}
          </main>
        </div>
      </div>
    </ButtonArea>
  );
};
