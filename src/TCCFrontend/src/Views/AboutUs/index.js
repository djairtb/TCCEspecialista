import React from "react";
import aboutus_capa from "../../Images/aboutus_capa.png";
import { Header } from "../InfoFerrugem/styles";
import foto_home_capa from "../../Images/foto_home_capa.jpg";
import ludi_foto from "../../Images/ludi_foto.jpeg";
import nathalia_foto from "../../Images/nathalia_foto.jpg";
import andre_foto from "../../Images/andre_foto.jpeg";
import juliana_foto from "../../Images/juliana_foto.jpeg";
import barbara_foto from "../../Images/barbara_foto.jpeg";
import Member from "../../Components/Member";

import {
  Container,
  ImageAbouUts,
  ContainerMision,
  Img,
  ContainerVision,
  ContainerValues,
  ContainerWhoAreUs,
  Line,
  Text,
  Title,
  ContainerImages,
  FileImg,
} from "./styles";

function AboutUs() {
  const INFOS = {
    missao:
      "Oferecer uma tecnologia inovadora e de alta eficiência para o monitoramento e identificação de doeças no cafeeiro, gerando valor ao cliente, diminuindo o impacto ambiental e buscando excelência.",
    visao:
      "Ser refêrencia atraves da nossa tecnologia e boa performance para que as ONG´S auxiliem os agricultores no combate a doenças que possam aparecer nas folhas do café.",
    quemSomos:
      "Somos uma equipe focada em entregar a melhor experiência para o usuário final. Queremos ajudar as ONG's e os pequenos agricultores a monitorarem suas plantações. Este é um projeto iniciado no ano de 2021 para um Trabalho de conclusão de curso(TCC), mas que se transformará em algo muito maior, pois nos empenhamos diariamente para que um dia possamos fazer diferença no mundo.",
  };

  const { missao, visao, quemSomos } = INFOS;

  const memberItem1 = {
    image: andre_foto,
    membersname: "André Dames",
    occupation: "Analista e Design",
  };

  const memberItem2 = {
    image: barbara_foto,
    membersname: "Bárbara Nunes",
    occupation: "Dev Back-End",
  };

  const memberItem3 = {
    image: foto_home_capa,
    membersname: "Djair Barral",
    occupation: "Dev Back-End",
  };

  const memberItem4 = {
    image: foto_home_capa,
    membersname: "Geovana Martins",
    occupation: "Serviços em nuvem",
  };

  const memberItem5 = {
    image: juliana_foto,
    membersname: "Juliana Carvalho",
    occupation: "Serviços de Hardware",
  };

  const memberItem6 = {
    image: ludi_foto,
    membersname: "Ludimila Araújo",
    occupation: "Dev Front-End",
  };

  const memberItem7 = {
    image: nathalia_foto,
    membersname: "Nathalia Santos",
    occupation: "Dev Front-End",
  };

  return (
    <Container>
      <ImageAbouUts>
        <Img src={aboutus_capa} alt="" />
      </ImageAbouUts>
      <ContainerMision>
        <Title>Missão</Title>
        <Line />
        <Text>{missao}</Text>
      </ContainerMision>
      <ContainerVision>
        <Title>Visão</Title>
        <Line />
        <Text>{visao}</Text>
      </ContainerVision>
      <ContainerValues>
        <Title>Valores</Title>
        <Line />
        <Text>
          • Evoluir na ética dentro da organização, respeitando os direitos do
          ser humano e do meio ambiente. <br />
          • Dedicação ao trabalho. <br />• Crença no negócio como fator
          essencial para empreender e crescer. <br />
          • Humildade, honestidade e respeito sempre com os usuários da nossa
          plataforma. <br />
        </Text>
      </ContainerValues>
      <ContainerWhoAreUs>
        <Title>Quem somos</Title>
        <Line />
        <Text>{quemSomos}</Text>

        <ContainerImages>
          <Member {...memberItem1}></Member>
          <Member {...memberItem2}></Member>
          <Member {...memberItem3}></Member>
          <Member {...memberItem4}></Member>
          <Member {...memberItem5}></Member>
          <Member {...memberItem6}></Member>
          <Member {...memberItem7}></Member>
        </ContainerImages>
      </ContainerWhoAreUs>
    </Container>
  );
}

export default AboutUs;
