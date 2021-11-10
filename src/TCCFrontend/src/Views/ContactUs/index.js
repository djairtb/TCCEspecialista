import React from "react";

import {
  Container,
  Title,
  BannerContact,
  Cont,
  BannerTwo,
  Telephone,
  Email,
  Address,
} from "./styles";

function ContactUs() {
  return (
    <Container>
      <BannerContact>
        <Title> Como você deseja entrar em contato com a gente?</Title>
      </BannerContact>
      <Cont>
        <BannerTwo>
          <Telephone>
            &nbsp; &nbsp; <i class="fa fa-mobile fa-2x" aria-hidden="true"></i>
            &nbsp; Telefone: (11) 94909-9665
          </Telephone>
          <br />
          <Email>
            <i class="fa fa-envelope" aria-hidden="true"></i>&nbsp; E-mail:
            coffeediseases@gmail.com
          </Email>
          <br />
          <Address>
            <i class="fa fa-map-marker fa-2x" aria-hidden="true"></i>&nbsp;
            Endereço: Avenida Paulista nº 753
          </Address>
          <br />
        </BannerTwo>
      </Cont>
    </Container>
  );
}

export default ContactUs;
