import React from "react";
import { FooterContainer, Text, Icons } from "./styles";
import MobileView from "./MobileView";
import { isMobile } from "react-device-detect";

function Footer() {
  if (isMobile) {
    return <MobileView />;
  }

  return (
    <FooterContainer>
      <Text>© 2021 Coffee Diseases Recognition. All rights reserved</Text>
      <Icons>
        Siga-nos &nbsp;
        <i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i> &nbsp;
        <i class="fa fa-instagram fa-2x" aria-hidden="true"></i> &nbsp;
        <i class="fa fa-twitter fa-2x" aria-hidden="true"></i> &nbsp;
      </Icons>
    </FooterContainer>
  );
}

export default Footer;
