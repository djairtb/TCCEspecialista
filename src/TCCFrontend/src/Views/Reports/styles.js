import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  margin-top: 25px;
  justify-content: space-around;

  @media (max-width: 1100px) {
    height: 50%;
    display: grid;
    justify-content: space-around;
    background-color: #0aa55f30;
    overflow: hidden;
  }
`;

export const Line = styled.hr`
  width: 100%;
  margin-right: 90%;

  @media (max-width: 500px) {
    width: 100%;
    margin-top: 0.6em;
  }
`;
export const Lista = styled.ul`
  display: block;
  list-style-type: none;
  margin-top: 1em;
  margin-bottom: 1 em;
  margin-left: 1em;
  margin-right: 0;
  //padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: '50%',
  float: 'left',
  fontSize: '30px',
  color: theme.colour.lightGrey,
  fontStyle: 'normal',
  fontStretch: 'normal',
  textAlign: 'left';
  border: 1px solid #cec3c3;
  &:hover {
    box-shadow: 20px 5px 10px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 500px) {
    margin-left: -3em;
  }

`;

export const DataLabel = styled.label`
  padding-left: 10px;
  padding-right: 10px;
`;

export const ContainerHeader = styled.div`
  display: block;
  align-items: c;
  alingn: left;
  align-items: baseline;
  position: left;
  font-size: 15px;

  @media (max-width: 500px) {
    display: block;
    width: 11em;
  }
  //@media (max-width: 500px) {
  //display: block;
  //width: 17em;
  //}

  @media (min-width: 501px) and (max-width: 900px) {
    display: grid;
    width: 17em;
  }
`;

export const Title = styled.p`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 10px;
  margin-top: 25px;
  font-size: 24px;
`;

export const LabelPred = styled.li`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-right: 10px;
  flex-wrap: wrap;
  text-color: red;
  font-size: 18px;
`;

export const BtnSaibaMais = styled.button`
  margin-left: 15px;
  background-color: #649760;
  border: none;
  cusrso: pointer;
  color: white;
  border-radius: 0.4em;
  font-size: 8pt;
  &:hover {
    cursor: pointer;
    box-shadow: 20px 5px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const LabelData = styled.li`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  color: #636363;
  font-size: 14px;
  text-align: justify;
`;

export const DangerTitle = styled.p`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.dangerColor};
`;

export const FileImg = styled.img`
  //width: 20%;
  //height: 100%;
  width: 250px;
  height: 220px;
  border: 1px solid #cec3c3;
  margin-left: -2em;
  @media (max-width: 1100px) {
    margin-bottom: 1em;
    padding: 1em;
  }

  @media (max-width: 400px) {
    width: 267px;
    margin-left: -1em;
  }
`;
