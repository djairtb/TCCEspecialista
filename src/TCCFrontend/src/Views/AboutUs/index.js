import React from "react";
import aboutus_capa from "../../Images/aboutus_capa.png";
import { Header } from "../InfoFerrugem/styles";
import foto_home_capa from "../../Images/foto_home_capa.jpg";
import foto1_home_capa from "../../Images/foto1_home_capa.jpg";
import foto2_home_capa from "../../Images/foto2_home_capa.jpg";
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
  const memberItem1 = {
    image: foto_home_capa,
    membersname: "André Dames",
    occupation: "Analista de",
  };

  const memberItem2 = {
    image: foto_home_capa,
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
    occupation: "ocupacao",
  };

  const memberItem5 = {
    image: foto_home_capa,
    membersname: "Juliana Carvalho",
    occupation: "ocupacao",
  };

  const memberItem6 = {
    image: foto_home_capa,
    membersname: "Ludimila Araújo",
    occupation: "Dev Front-End",
  };

  const memberItem7 = {
    image: foto_home_capa,
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
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </ContainerMision>
      <ContainerVision>
        <Title>Visão</Title>
        <Line />
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </ContainerVision>
      <ContainerValues>
        <Title>Valores</Title>
        <Line />
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </ContainerValues>
      <ContainerWhoAreUs>
        <Title>Quem somos</Title>
        <Line />
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. AKODKOA
        </Text>

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
