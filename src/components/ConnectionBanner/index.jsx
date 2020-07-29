import React from "react";
import { Card, MetaMaskButton, Icon, Text } from "rimble-ui";
import { Area } from "./styles";
import { Link } from "react-router-dom";
export const ConnectionBanner = () => {
  return (
    <Area>
      <Card width={"auto"} maxWidth={"420px"} mx={"auto"} px={[3, 3, 4]}>
        <Text
          caps
          fontSize={0}
          fontWeight={4}
          mb={3}
          display={"flex"}
          alignItems={"center"}
        >
          <Icon name={"AccountBalanceWallet"} mr={2} />
          {/* <p style={{ color: "#e63950" }}> */}
          Please use a browser that supports Metamask wallet
          {/* </p> */}
        </Text>

        <a
          className="decoration"
          href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
        >
          <MetaMaskButton.Outline
            fullWidth
            width={1}
            // px={[3, 4, 4]}
          >
            Install MetaMask
          </MetaMaskButton.Outline>
        </a>
      </Card>
    </Area>
  );
};
