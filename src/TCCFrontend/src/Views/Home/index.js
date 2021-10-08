import React, { useState, useCallback, useEffect, useRef } from "react";

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
  Link,
  ItemMancha,
  ItemFerrugem,
  ItemCercos,
  Imagems,
  FIVE_SECONDS,
} from "./styles";

function Home() {
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
