import React, { useState, useCallback, useEffect } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { useSelector } from "react-redux";
import axios from "axios";
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

const INITIAL_DATE = new Date();
const initialReportData = [
  {
    tagname_pred: "Indefinido",
    data_pred: "2021-10-25T05:03:12.785Z",
    user_id: 1,
    url_pred:
      "https://tccimgstorageacc.blob.core.windows.net/imgprediction/2.JPG",
  },
];

function Reports() {
  const [initialDate, setInitialDate] = useState(INITIAL_DATE);
  const [finalDate, setFinalDate] = useState(INITIAL_DATE);
  const [reportData, setReportData] = useState(initialReportData);

  const userid = useSelector(({ login }) => {
    return login.userid;
  });

  const fetchData = useCallback(async () => {
    const { data } = await axios.post("http://localhost:4000/all", {
      inicio: initialDate,
      fim: finalDate,
      userId: userid,
    });
    if (data) {
      setReportData(data);
    }
  }, [finalDate, initialDate, userid]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onChangeInitialDate = useCallback((e) => {
    setInitialDate(e.target.value);
  }, []);

  const onChangeFinalDate = useCallback((e) => {
    setFinalDate(e.target.value);
  }, []);

  const onRequestClick = useCallback(async () => {
    if (initialDate && finalDate) {
      const { data } = await axios.post("http://localhost:4000/date", {
        inicio: initialDate,
        fim: finalDate,
        userId: userid,
      });
      if (data) {
        setReportData(data);
      }
    }
  }, [initialDate, finalDate, userid]);

  const renderImage = useCallback(
    ({ url_pred }, key) => <FileImg src={url_pred} alt="image" key={key} />,
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
      {reportData.length ? (
        <>
          <Title>Imagens Coletadas</Title>
          <Line />
          <ImageContainer>{reportData.map(renderImage)}</ImageContainer>
        </>
      ) : null}
      <Title>Resultado</Title>
      <Line />
      <DangerTitle></DangerTitle>
      <Title>Sintomas</Title>
      <Line />
      <Subtitle></Subtitle>
      <Title>Tratamento</Title>
      <Line />
      <Subtitle></Subtitle>
    </Container>
  );
}

export default Reports;
