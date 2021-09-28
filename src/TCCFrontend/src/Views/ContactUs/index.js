import React, { useState, useCallback } from "react";
//import styled from "styled-components";
//import Input from "../../Components/Input";
import { Container, Contact, Box, Title, Phone, Email, Address } from "../ContactUs/styles";

function ContactUs(){
      
    return (  
      <Container>
        <Box>
          <Title>Contate-nos</Title>
          <Contact>
            <Phone><i class="fa fa-mobile fa-2x" aria-hidden="true"></i>&nbsp; Telefone: (xx) xxxxx-xxxx</Phone>
            <Email><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp; E-mail:
            aaaaaaaa@aaaaaa.com</Email>
            <Address><i class="fa fa-map-marker fa-2x" aria-hidden="true"></i>&nbsp; Endereço: Av Paulista nº xxx</Address>
          </Contact>
        </Box>

      </Container>
      
    );
  }
  
  export default ContactUs;