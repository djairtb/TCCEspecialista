import React, { useState, useCallback, useEffect, useRef } from "react";
import image1 from "../../Images/cercos1.png";
import image2 from "../../Images/cercos2.JPG";
import image3 from "../../Images/cercos3.JPG";
import image4 from "../../Images/cercos4.JPG";
import image5 from "../../Images/cercos5.JPG";
import image6 from "../../Images/cercos6.jpg";

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
} from "./styles";

function InfoCercosporiose() {
  const INFOS = {
    InfoDiasese:
      "O fungo consegue se disseminar pelo vento, insetos e até mesmo pela água e após infectar a planta (sob condições favoráveis a seu desenvolvimento, como temperatura e molhamento foliar) ocorre a germinação e penetração do tubo germinativo, que penetra se utilizando da cutícula ou das aberturas naturais. Sendo assim, a melhor temperatura para o fungo é de 24ºC, tanto para o crescimento quanto para a germinação máxima. Logo após conseguir se infectar, o fungo produz os chamados conídios e o ciclo se reinicia, segundo pesquisa da equipe Rehagro.",
    InformSymp:
      "Há ocorrência de cercospora nas folhas e/ou nos frutos que ainda estão se desenvolvendo. O sintoma característico dessa doença são manchas castanho-claro/escuro em formato de círculo, com a parte central branco/cinza tendo geralmente a parte externa do círculo um halo na cor amarela (Matiello et al., 2002). Já nos frutos, o sintoma principal são manchas marrons, pequenas e necróticas. Essa doença geralmente causa a queda das folhas, reduzindo o desenvolvimento da planta. Nos frutos, os danos são maiores, pois acabam apresentando uma aceleração na maturação, o que resulta em quedas do fruto antes da hora, prejudicando até mesmo a qualidade da bebida, pois se há aumento dos frutos doentes, há também aumento da porcentagem de polifenóis, “que exercem ação protetora antioxidante de aldeídos e participam nos mecanismos de defesa da planta mediante injúrias” (Amorim, 1978).",
    InfoTreatm:
      "A mais simples forma de controlar a doença como citada anteriormente, é evitar que a planta sofra com desequilíbrios nutricionais. Por isso, o melhor seria um planejamento correto de adubações e o acompanhamento das folhas do café. Com relação ao plantio, considera-se evitar plantios tardios e realizar uma preparação cuidadosa do solo, para que o solo não afete a absorção de nutrientes. Além disso, há estudos que indicam a utilização de silício para controlar o fungo (Juliatti, 2001). Há muitas outras práticas, como utilizar semente certificada e tratada com determinados fungicidas, evitar cultivar o café próximo a área que se cultivem acelga, seguir o espaçamento adequado para se evitar o plantio adensado, irrigar conforme a necessidade e sempre que possível cultivar em local drenado, para que não haja o acúmulo de água na lavoura. Quando utilizar canteiro, elevar no mínimo dez centímetros para diminuir a umidade na superfície do solo (UFLA, Lavras-MG, 2003)",
  };

  const Imagems = [image1, image2, image3, image4, image5, image6];

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
      <Title>Cercosporiose</Title>
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

export default InfoCercosporiose;
