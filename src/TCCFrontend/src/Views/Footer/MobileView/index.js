import React from "react";
import { FooterContainer, Text, Icons } from "../styles";

export default function MobileView() {
  return (
    <FooterContainer>
      <Text>© 2021 Coffee Diseases Recognition. All rights reserved</Text>
      <Icons>
        <i class="fa fa-facebook-official " aria-hidden="true"></i> &nbsp;
        <i class="fa fa-instagram " aria-hidden="true"></i> &nbsp;
        <i class="fa fa-twitter " aria-hidden="true"></i> &nbsp;
      </Icons>
    </FooterContainer>
  );
}
