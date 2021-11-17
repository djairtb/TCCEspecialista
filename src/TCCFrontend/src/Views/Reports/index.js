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
  Lista,
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
    return login.id;
  });

  const fetchData = useCallback(async () => {
    const { data } = await axios.post("http://localhost:4000/resultados/all", {
      userId: userid,
    });
    if (data) {
      console.log(userid);
      console.log(data);
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
      const { data } = await axios.post("http://localhost:4000/resultados/date", {
        dataInicio: initialDate,
        dataFim: finalDate,
        userId: userid,
      });
      if (data) {
        console.log(data)
        setReportData(data);
      }
    }
  }, [initialDate, finalDate, userid]);

  const renderObject = useCallback(
    ({ url_pred,tagname_pred,data_pred }, key) => <Lista><li>{tagname_pred}</li><li>{<FileImg src={url_pred} alt="image" key={key} />}</li><li>{data_pred}</li></Lista>,  
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
          <Title>Relatorio de Predições:</Title>
          {reportData.map(renderObject)}
          <Line />
        </>
      ) : null}
    </Container>
  );
}

export default Reports;
