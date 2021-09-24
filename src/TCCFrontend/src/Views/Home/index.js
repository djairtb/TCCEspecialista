import React, { useState, useCallback, useEffect } from "react";
import homeBg from "../../Images/home.jpg";
import folhaBg from "../../Images/login-background.jpg";
import Button from "../../Components/Button";
import Card from "../../Components/Card";
import { Container, Header, HeaderItem, Carroussel } from "./styles";

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
const TWENTY_SECONDS = 20000;

const Imagems = [homeBg, folhaBg];

function Home() {
  const [index, setIndex] = useState(0);

  const updateImage = useCallback(() => {
    setIndex((index + 1) % Imagems.length);
  }, [index]);

  //
  useEffect(() => {
    let intervalId;
    intervalId = setInterval(updateImage, TWENTY_SECONDS);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <Header style={{ backgroundImage: `url(${Imagems[index]})` }}>
        <HeaderItem>
          <p style={{ fontSize: "30px" }}>Lorem Ipsum Dolor</p>
          <Button>Saiba Mais</Button>
        </HeaderItem>
      </Header>
      <Carroussel>
        {[1, 2, 3].map((_, index) => (
          <Card {...mockItem} key={index}/>
        ))}
      </Carroussel>
    </Container>
  );
}

export default Home;
