import React, { useState, useCallback } from "react";
import Input from "../../Components/Input";
import foto_home_capa from "../../Images/foto_home_capa.jpg";
import foto1_home_capa from "../../Images/foto1_home_capa.jpg";
import foto2_home_capa from "../../Images/foto2_home_capa.jpg";
import foto3_home_capa from "../../Images/foto3_home_capa.jpg";
import {
  Title,
  Subtitle,
  ImageContainer,
  DangerTitle,
  Line,
  Container,
  FileImg,
} from "./styles";

function Reports() {
  const INITIAL_DATE = new Date();

  const MOCK_DATA = {
    imagens: [
      foto_home_capa,
      foto1_home_capa,
      foto2_home_capa,
      foto3_home_capa,
    ],
    resultTitle: "Praga",
    result:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    solution:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };

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
