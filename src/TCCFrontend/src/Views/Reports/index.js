import React, { useState, useCallback } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { useSelector } from "react-redux";
import {
  Title,
  Subtitle,
  ImageContainer,
  DangerTitle,
  Line,
  Container,
  FileImg,
  ContainerHeader,
} from "./styles";
import client from "../../Services/client";

const INITIAL_DATE = new Date();
const MOCK_DATA = {
  resultTitle: "Praga",
  result:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  solution:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};

function Reports() {
  const [initialDate, setInitialDate] = useState(INITIAL_DATE);
  const [finalDate, setFinalDate] = useState(INITIAL_DATE);
  const [imagens, setImagens] = useState([]);

  const userid = useSelector(({ login }) => {
    return login.userid;
  });

  const { resultTitle, result, solution } = MOCK_DATA;

  const onChangeInitialDate = useCallback((e) => {
    setInitialDate(e.target.value);
  }, []);

  const onChangeFinalDate = useCallback((e) => {
    setFinalDate(e.target.value);
  }, []);

  const onRequestClick = useCallback(async () => {
    console.log(initialDate, finalDate);
    if (initialDate && finalDate) {
      const { data } = await client("resultados/date", {
        dataInicio: initialDate,
        dataFim: finalDate,
        userId: userid,
      });
    }
    const { data } = await client("resultados/all", {
      userId: userid,
    });
  }, [initialDate, finalDate, userid]);

  const renderImage = useCallback(
    (image) => <FileImg src={image} alt="image" key={image} />,
    []
  );

  return (
    <Container>
      <ContainerHeader>
        <Input
          type="date"
          value={initialDate}
          onChange={onChangeInitialDate}
          defaultValue={INITIAL_DATE}
          format="yyyy-MM-dd"
        />
        <Input
          type="date"
          value={finalDate}
          onChange={onChangeFinalDate}
          defaultValue={INITIAL_DATE}
          format="yyyy-MM-dd"
        />
        <Button onClick={onRequestClick}>Solicitar</Button>
      </ContainerHeader>
      {imagens.length ? (
        <>
          <Title>Imagens Coletadas</Title>
          <Line />
          <ImageContainer>{imagens.map(renderImage)}</ImageContainer>
        </>
      ) : null}
      <Title>Resultado</Title>
      <Line />
      <DangerTitle>{resultTitle}</DangerTitle>
      <Title>Sintomas</Title>
      <Line />
      <Subtitle>{result}</Subtitle>
      <Title>Tratamento</Title>
      <Line />
      <Subtitle>{solution}</Subtitle>
    </Container>
  );
}

export default Reports;
