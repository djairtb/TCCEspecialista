import React, { useState, useCallback } from "react";
import Input from "../../Components/Input";
import {
  Title,
  Subtitle,
  ImageContainer,
  DangerTitle,
  Line,
  Container,
  INITIAL_DATE,
  MOCK_DATA,
  FileImg,
} from "./styles";

function Reports() {
  const [date, setDate] = useState(INITIAL_DATE);

  const { imagens, resultTitle, result, solution } = MOCK_DATA;

  const onChangeDate = useCallback((e) => {
    setDate(e.target.value);
  }, []);

  return (
    <Container>
      <Input
        type="date"
        value={date}
        onChange={onChangeDate}
        defaultValue={INITIAL_DATE}
        format="yyyy-MM-dd"
      />
      <Title>Imagens Coletadas</Title>
      <Line />
      <ImageContainer>
        {imagens.map((image) => (
          <FileImg src={image} alt="image" key={image} />
        ))}
      </ImageContainer>
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
