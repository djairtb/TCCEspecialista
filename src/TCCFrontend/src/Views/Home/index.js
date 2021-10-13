import React, { useState, useCallback, useEffect, useRef } from "react";

import Button from "../../Components/Button";
import Card from "../../Components/Card";
import homeBg from "../../Images/home.png";
import ferrugem_capa from "../../Images/ferrugem-capa.jpg";
import cercospora_capa from "../../Images/cercospora-capa.jpg";
import mancha_capa from "../../Images/mancha-capa.jpg";
import folhaBg from "../../Images/login-background.jpg";
import foto_home_capa from "../../Images/foto_home_capa.jpg";
import foto1_home_capa from "../../Images/foto1_home_capa.jpg";
import foto2_home_capa from "../../Images/foto2_home_capa.jpg";
import foto4_home_capa from "../../Images/foto4_home_capa.jpg";
import {
  Container,
  Header,
  HeaderItem,
  Carroussel,
  BottomController,
  Circle,
  CircleContainer,
  IconClickable,
  Link,
  ItemMancha,
  ItemFerrugem,
  ItemCercos,
  Imagems,
  FIVE_SECONDS,
} from "./styles";

function Home() {
  const FIVE_SECONDS = 5000;

  const Imagems = [
    homeBg,
    folhaBg,
    foto_home_capa,
    foto1_home_capa,
    foto2_home_capa,
    foto4_home_capa,
  ];

  const ItemFerrugem = {
    title: "Ferrugem",
    description: `A ferrugem é a doença sobre a qual foi mais desenvolvido pesquisa devido
    sua importância. No cafeeiro, ela é causada pela ação do fungo Hemileia vastatrix, que é um
    parasita foliar obrigatório do café. Ela ocorre em todas as regiões produtoras de café no Brasil
    e na América Central.`,
    image: ferrugem_capa,
  };

  const ItemCercos = {
    title: "Cercosporiose",
    description: `Causada pelo fungo Cercospora coffeicola, uma das principais e mais antigas doenças conhecidas do cafeeiro. Pode ocorrer tanto no viveiro quanto no campo.
  
    No viveiro de mudas, a doença é favorecida por regas diárias, por excesso de adubação com K e por falta de Ca.
    `,
    image: cercospora_capa,
  };

  const ItemMancha = {
    title: "Mancha Aureolada",
    description: `A mancha aureolada é uma doença bacteriana que ataca folhas, rosetas, frutos novos e ramos do cafeeiro, atingindo mudas no viveiro e plantas no campo, ocorrendo principalmente nas regiões mais frias do Estados do Paraná, São Paulo e Sul de minas e em regiões altas e desprotegidas de ventos. `,
    image: mancha_capa,
  };
  const [index, setIndex] = useState(0);

  const intervalRef = useRef();

  const updateImage = useCallback(() => {
    setIndex((index + 1) % Imagems.length);
  }, [index]);

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
      <Header style={{ backgroundImage: `url(${Imagems[index]})` }}>
        <HeaderItem>
          <p style={{ fontSize: "30px" }}>Coffee Diseases Recognition</p>
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
      <Carroussel>
        <Card {...ItemFerrugem}>
          <Button>
            <Link to="infoferrugem">Saiba mais </Link>
          </Button>
        </Card>

        <Card {...ItemCercos}>
          <Button>
            <Link to="infocercosporiose">Saiba mais </Link>
          </Button>
        </Card>
        <Card {...ItemMancha}>
          <Button>
            <Link to="infomancha">Saiba mais </Link>
          </Button>
        </Card>
      </Carroussel>
    </Container>
  );
}

export default Home;
