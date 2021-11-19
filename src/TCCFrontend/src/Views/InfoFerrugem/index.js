import React, { useState, useCallback, useEffect, useRef } from "react";
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
  Line,
  Container,
  BottomController,
  CircleContainer,
  Circle,
  IconClickable,
  HeaderItem,
  Header,
  TitleInf,
  INFOS,
} from "./styles";

function InfoFerrugem() {
  const INFOS = {
    InfoDiasese:
      "A ferrugem foi encontrada pela primeira vez no Brasil em torno de 1970, assim como os demais fungos, o principal meio de disseminação é pela chuva e o vento. Uma curiosidade sobre a doença é que até 2001 foram encontradas 33 raças do fungo.",
    InformSymp:
      "Os primeiros sintomas normalmente surgem na parte inferior da folha, começando com pequenas manchas entre 1 e 3mm. Mais tarde, as mesmas manchas podem atingir cerca de 2cm de diâmetros, mudando também sua coloração para amarelo e laranja. Também é comum necrose de algumas partes do tecido da folha e manchas cloróticas que possibilitam a visão quando a folha é colocada contra a luz. (Carvalho & Chalfoun, 2000). Infelizmente é uma doença em que os sintomas apenas aparecem quando a planta já foi bem prejudicada, já que a esporulação ocorre em sua fase reprodutiva, ou seja, quando ocorre a esporulação o tecido está colonizado e consequentemente à planta já sofreu com grandes perdas durante seu desenvolvimento.",
    InfoTreatm:
      "Medidas para controlar o fungo devem ser aplicadas o mais rápido possível, em caso de infestação, pois tais medidas podem impedir os danos que a doença pode trazer para a safra. Normalmente é utilizado fungicidas a base de cobre, porém há duas categorias de fungicidas para auxiliar no caso de Ferrugem, aquele que protege e faz parte do controle preventivo, auxiliando no combate a penetração do fungo, conhecido como Fungicidas Protetores (Cúpricos – Oxicloreto de cobre, hidróxido de cobre do primeiro grupo) e os fungicidas sistêmicos que são absorvidos no local em que foi aplicado (Foliar: triazol, estrobilurina, Solo (fungicida + inseticida)).",
  };

  const Imagems = [image1, image2, image3, image4, image5, image6, image7];

  const { InfoDiasese, InformSymp, InfoTreatm } = INFOS;

  const FIVE_SECONDS = 5000;

  const [index, setIndex] = useState(0);

  const intervalRef = useRef();

  const updateImage = useCallback(() => {
    setIndex((prevState) => (prevState + 1) % Imagems.length);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(updateImage, FIVE_SECONDS);
    return () => clearInterval(intervalRef.current);
  }, []);

  const onLeftClick = useCallback(() => {
    clearInterval(intervalRef.current);
    if (index !== 0) {
      setIndex(index - 1);
    }
  }, [index]);

  const onRightClick = useCallback(() => {
    clearInterval(intervalRef.current);
    if (index < Imagems.length - 1) {
      setIndex(index + 1);
    } else if (index === Imagems.length - 1) {
      setIndex(0);
    }
  }, [index]);

  return (
    <Container>
      <Title>Ferrugem do Cafeeiro</Title>
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

      <Subtitle>{InfoDiasese}</Subtitle>
      <Line />
      <TitleInf>Sintomas</TitleInf>

      <Subtitle>{InformSymp}</Subtitle>
      <Line />
      <TitleInf>Tratamento</TitleInf>

      <Subtitle>{InfoTreatm}</Subtitle>
    </Container>
  );
}

export default InfoFerrugem;
