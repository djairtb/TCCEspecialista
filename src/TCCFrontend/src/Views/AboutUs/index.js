import React from "react";
import aboutus_capa from "../../Images/aboutus_capa.png";
import image from "../../Images/ludi.jpeg";
import { Header } from "../InfoFerrugem/styles";

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
  MOCK_IMAGE,
  imagems,
} from "./styles";

function AboutUs() {
  const imagems = [image];

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

        <ContainerImages
          style={{ backgroundImage: `url(${imagems[7]})` }}
        ></ContainerImages>
      </ContainerWhoAreUs>
    </Container>
  );
}

export default AboutUs;
