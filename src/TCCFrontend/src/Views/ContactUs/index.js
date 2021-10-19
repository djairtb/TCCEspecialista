import React from "react";

import {
  Container,
  ContainerMision,
  ContainerVision,
  Line,
  Text,
  Title,
  BannerContact,
  Cont,
  BannerTwo,
  Telephone,
  Email,
  Address,
} from "./styles";

function ContactUs() {
  const INFOS = {
    missao:
      "Oferecer uma tecnologia inovadora e de alta eficiência para o monitoramento e identificação de doeças no cafeeiro, gerando valor ao cliente, diminuindo o impacto ambiental e buscando excelência.",
    visao:
      "Ser refêrencia atraves da nossa tecnologia e boa performance para que as ONG´S auxiliem os agricultores no combate a doenças que possam aparecer nas folhas do café.",
    quemSomos:
      "Somos uma equipe focada em entregar a melhor experiência para o usuário final. Queremos ajudar as ONG´s e os pequenos agricultores a monitorararem suas plantações. Este é um projeto iniciado no ano de 2021 para um Trabalho de conclusão de curso(TCC), mas que se transformará em algo muito maior, pois nos empenhamos diariamente para que um dia possamos fazer diferença no mundo.",
  };

  const { missao, visao, quemSomos } = INFOS;

  return (
    <Container>
      <BannerContact>
        <Title> Como você quer entrar em contato com a gente?</Title>
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
            Endereço: Av Paulista nº xxxdjsidsidjisjsdi
          </Address>
          <br />
        </BannerTwo>
      </Cont>
    </Container>
  );
}

export default ContactUs;
