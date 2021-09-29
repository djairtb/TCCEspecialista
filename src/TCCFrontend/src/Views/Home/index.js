import React, { useState, useCallback, useEffect } from "react";
import homeBg from "../../Images/home.png";
import folhaBg from "../../Images/login-background.jpg";
import Button from "../../Components/Button";
import Card from "../../Components/Card";
import {
  Container,
  Header,
  HeaderItem,
  Carroussel,
  BottomController,
  Circle,
  CircleContainer,
  IconClickable,
} from "./styles";

const mockItem = {
  title: "ferrugem",
  description: `AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`,
  image: homeBg,
};
const FIVE_SECONDS = 5000;

const Imagems = [homeBg, folhaBg];

function Home() {
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
      <Header style={{ backgroundImage: `url(${Imagems[index]})` }}>
        <HeaderItem>
          <p style={{ fontSize: "30px" }}>Lorem Ipsum Dolor</p>
          <Button>Saiba Mais</Button>
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
        {[1, 2, 3].map((_, index) => (
          <Card {...mockItem} key={index} />
        ))}
      </Carroussel>
    </Container>
  );
}

export default Home;
