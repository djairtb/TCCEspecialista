import React, { useState, useCallback, useEffect } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Title,
  DataLabel,
  Lista,
  Container,
  FileImg,
  ContainerHeader,
  LabelPred,
  LabelData,
  BtnSaibaMais
} from "./styles";

const INITIAL_DATE = new Date();
const initialReportData = [
  {
    tagname_pred: " ",
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
  const history = useHistory();
  const userid = useSelector(({ login }) => {
    return login.id;
  });

  const fetchData = useCallback(async () => {
    const { data } = await axios.post(`${process.env.REACT_APP_BACK_ORIGIN}/resultados/all`, {
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
      const { data } = await axios.post(`${process.env.REACT_APP_BACK_ORIGIN}/resultados/date`, {
        dataInicio: initialDate,
        dataFim: finalDate,
        userId: userid,
      });
      if (data) {
        setReportData(data);
      }
    }
  }, [initialDate, finalDate, userid]);

 
  function saibaMais(parameter, event){
    if(parameter == 'Indefinido')
      window.alert('Nehuma praga do café detectada na imagem!!.')
    else if(parameter == 'Ferrugem')
      history.push("/infoferrugem")
    else if(parameter == 'Cercosporiose')
      history.push("/infocercosporiose")
    else if(parameter == 'Mancha Aureolada')
      history.push("/infomancha")
  }
  const renderObject = useCallback(
    ({ url_pred,tagname_pred,data_pred }, key) => {
      let data = new Date(data_pred); 
      return  <Lista><LabelPred>{tagname_pred} <BtnSaibaMais onClick={(event)=>{
          saibaMais(tagname_pred, event)
      
        }}>Informações</BtnSaibaMais></LabelPred><LabelData>{new Intl.DateTimeFormat("pt-BR", {year: "numeric",
        month: "long",
        day: "2-digit"
      }).format(data)}</LabelData><li>{<FileImg src={url_pred} alt="image" key={key} />}</li></Lista>
    }
    
   ,  
    []

  );

  return (
    <Container>
      <ContainerHeader>    
      <p>Filtrar por data:</p>
      <hr />
        <DataLabel>Data Inicio: </DataLabel>
        <Input
          id="Data Inicio"
          type="date"
          value={initialDate}
          onChange={onChangeInitialDate}
          defaultValue={INITIAL_DATE}
          format="yyyy-MM-dd"
        />
        <DataLabel>Data Final: </DataLabel>
        <Input
          type="date"
          value={finalDate}
          onChange={onChangeFinalDate}
          defaultValue={INITIAL_DATE}
          format="yyyy-MM-dd"
        />
        <DataLabel></DataLabel>
        <Button onClick={onRequestClick}>Filtrar</Button>
        <hr />
      </ContainerHeader>
      
      {reportData.length ? (
        <>
          <Title>Relatorio de Predições:</Title>
          {reportData.map(renderObject)}
        </>
      ) : null}
    </Container>
  );
}

export default Reports;
