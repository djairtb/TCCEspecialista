import React from "react";
import { FooterContainer, Text, Icons, IconLink } from "./styles";
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
        <IconLink a href="https://facebook.com/coffeediseases" target="_blank">
          <i class="fa fa-facebook-official fa-lg" aria-hidden="true"></i>
        </IconLink>
        <IconLink
          a
          href="https://www.instagram.com/diseasesrecognition/"
          target="_blank"
        >
          <i class="fa fa-instagram fa-lg" aria-hidden="true"></i> &nbsp;
        </IconLink>
        <IconLink a href="https://twitter.com/CoffeeDiseases" target="_blank">
          <i class="fa fa-twitter fa-lg" aria-hidden="true"></i> &nbsp;
        </IconLink>
      </Icons>
    </FooterContainer>
  );
}

export default Footer;
