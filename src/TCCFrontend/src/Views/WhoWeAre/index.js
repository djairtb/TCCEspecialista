import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Input from "../../Components/Input";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-color: white;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  overflow: hidden;
  height: 45rem;
  padding: 2em;
  display: block;
`;

const ContainerDiv1 = styled.div`
  width: 100vw;
  /* background-color: rgb(239 224 224); */
  background-color: white;
  height: 25em;
  display: inline-block;
  -webkit-column-count: 2;
  margin-top: -2em;
  margin-left: -2em;
  overflow: hidden;
  display: block;

  @media (max-width: 800px) {
    flex-direction: column;
    position: relative;
    margin-top: 1em;
    padding: 0em;
  }
`;

const ContainerDiv2 = styled.div`
  background-color: white;
  width: 100vw;
  height: 25em;
  display: inline-block;
  -webkit-column-count: 2;
  margin-top: 1em;
  margin-left: -2em;
  margin-left: -2em;
  overflow: hidden;
  display: block;

  @media (max-width: 800px) {
    flex-direction: column;
    position: relative;
    margin-top: 0em;
    margin-left: -3em;
  }
`;

const ContainerHistory = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  overflow: auto;
  float: right;

  @media (max-width: 1000px) {
    flex-direction: column;
    position: relative;
    margin-top: 0em;
    margin-left: 0em;
    width: 13em;
    height: 20em;
  }
`;

const ContainerMissao = styled.div`
  background-color: rgb(239 224 224);
  /*  background-color: #d9ead8;*/
  width: 105%;
  height: 100%;
  margin: 10px;
  overflow: auto;
  margin-left: -1em;

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 13em;
    height: 20em;
  }
`;
const ContainerVisao = styled.div`
  background-color: rgb(228 174 174 / 70%);
  width: 90%;
  height: 80%;
  margin: 10px;
  margin-left: 3em;
  overflow: auto;
  margin-top: -0em;
`;
const ContainerValores = styled.div`
  background-color: #b3cca7;
  width: 90%;
  height: 80%;
  overflow: auto;
  margin-left: -1em;
`;
const Title = styled.p`
  color: white;
  text-align: center;
  font-size: 200%;
`;

const TitleHistory = styled.p`
  color: black;
  text-align: center;
  font-size: 200%;
`;

const Text = styled.p`
  font-size: 90%;
  text-indent: 1.5em;
  margin-top: 0;
  text-align: start;
  margin: 2em;
`;

function WhoWeAre() {
  return (
    <Container>
      <ContainerDiv1>
        <ContainerHistory>
          <TitleHistory>História</TitleHistory>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.It is a long established
            fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters, as
            opposed to using 'Content here, content here', making it look like
            readable English.
          </Text>
        </ContainerHistory>

        <ContainerMissao>
          <Title>Missão</Title>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.It is a long established
            fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal.
          </Text>
        </ContainerMissao>
      </ContainerDiv1>

      <ContainerDiv2>
        <ContainerVisao>
          <Title>Visão</Title>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.It is a long established
            fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal.
          </Text>
        </ContainerVisao>

        <ContainerValores>
          <Title>Valores</Title>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.It is a long established
            fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal.
          </Text>
        </ContainerValores>
      </ContainerDiv2>
    </Container>
  );
}

export default WhoWeAre;
