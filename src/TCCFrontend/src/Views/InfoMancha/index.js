import React, { useState, useCallback, useEffect } from "react";
import image1 from "../../Images/ferrugem1.jpg";
import image2 from "../../Images/ferrugem2.jpg";
import image3 from "../../Images/ferrugem3.jpg";
import image4 from "../../Images/ferrugem4.jpg";
import image5 from "../../Images/ferrugem5.jpg";
import image6 from "../../Images/ferrugem6.jpg";
import image7 from "../../Images/ferrugem7.jpg";
import {
  Title,
  Subtitle,
  DangerTitle,
  Line,
  Container,
  INFOS,
  BottomController,
  Circle,
  HeaderItem,
  Header,
  IconClickable,
  CircleContainer,
  Imagems,
  FIVE_SECONDS,
  TitleInf,
} from "./styles";

function InfoMancha() {
  const Imagems = [image1, image2, image3, image4, image5, image6, image7];

  const { InfoDiasese, InformSymp, InfoTreatm } = INFOS;

  const [index, setIndex] = useState(0);

  const updateImage = useCallback(() => {
    setIndex((index + 1) % Imagems.length);
  }, [index]);

  useEffect(() => {
    let intervalId;
    intervalId = setInterval(updateImage, FIVE_SECONDS);
    return () => clearInterval(intervalId);
  }, []);

  const onLeftClick = useCallback(() => {
    if (index !== 0) {
      setIndex(index - 1);
    }
  }, [index]);

  const onRightClick = useCallback(() => {
    if (index !== Imagems.length - 1) {
      setIndex(index + 1);
    }
  }, [index]);

  return (
    <Container>
      <Title>Mancha Aureolada</Title>
      <Line />
      <TitleInf>Informações</TitleInf>

      <Header style={{ backgroundImage: `url(${Imagems[index]})` }}>
        <HeaderItem>
          <BottomController>
            <IconClickable
              className="fa fa-chevron-left fa-lg"
              aria-hidden="true"
              onClick={onLeftClick}
            />
            <CircleContainer>
              {Array.from({ length: Imagems.length }).map((_, key) => (
                <Circle key={key} isactive={key === index} />
              ))}
            </CircleContainer>
            <IconClickable
              className="fa fa-chevron-right fa-lg"
              aria-hidden="true"
              onClick={onRightClick}
            />
          </BottomController>
        </HeaderItem>
      </Header>

      <DangerTitle>{InfoDiasese}</DangerTitle>
      <Line />
      <TitleInf>Sintomas</TitleInf>

      <Subtitle>{InformSymp}</Subtitle>
      <Line />
      <Title>Tratamento</Title>

      <Subtitle>{InfoTreatm}</Subtitle>
    </Container>
  );
}

export default InfoMancha;
