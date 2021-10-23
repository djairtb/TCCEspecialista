import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
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
  width: 150px;
  margin-right: 90%;
`;

export const ContainerHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: baseline;

  @media (max-width: 600px) {
    display: flex;
    justify-content: space-between;
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

export const Subtitle = styled.p`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 10px;
  margin-top: 25px;
  color: #636363;
  font-size: 18px;
  text-align: justify;
`;

export const DangerTitle = styled.p`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 10px;
  margin-top: 25px;
  color: ${({ theme }) => theme.dangerColor};
`;

export const FileImg = styled.img`
  //width: 20%;
  //height: 100%;
  width: 250px;
  height: 250px;

  @media (max-width: 1100px) {
    width: 310px;
    margin-bottom: 1em;
    padding: 1em;
  }
`;
