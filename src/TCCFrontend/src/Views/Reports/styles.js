import styled from "styled-components";
import foto_home_capa from "../../Images/foto_home_capa.jpg";
import foto1_home_capa from "../../Images/foto1_home_capa.jpg";
import foto2_home_capa from "../../Images/foto2_home_capa.jpg";
import foto3_home_capa from "../../Images/foto3_home_capa.jpg";

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
`;

export const Line = styled.hr`
  width: 150px;
  margin-right: 90%;
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
  height: 100px;
  width: 100px;
`;

export const INITIAL_DATE = new Date();

export const MOCK_DATA = {
  imagens: [foto_home_capa, foto1_home_capa, foto2_home_capa, foto3_home_capa],
  resultTitle: "Praga",
  result:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  solution:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};
