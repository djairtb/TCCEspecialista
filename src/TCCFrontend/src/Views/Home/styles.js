import styled from "styled-components";
import { Link as RouteLink } from "react-router-dom";
import homeBg from "../../Images/home.png";
import ferrugem_capa from "../../Images/ferrugem-capa.jpg";
import cercospora_capa from "../../Images/cercospora-capa.jpg";
import mancha_capa from "../../Images/mancha-capa.jpg";
import folhaBg from "../../Images/login-background.jpg";
import foto_home_capa from "../../Images/foto_home_capa.jpg";
import foto1_home_capa from "../../Images/foto1_home_capa.jpg";
import foto2_home_capa from "../../Images/foto2_home_capa.jpg";
import foto3_home_capa from "../../Images/foto3_home_capa.jpg";
import foto4_home_capa from "../../Images/foto4_home_capa.jpg";

export const Link = styled(RouteLink)`
  cursor: pointer;
  color: white;
  font-size: 20px;
  text-decoration: none;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  //opacity: 0.9;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const HeaderItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;

  @media (max-width: 400px) {
    text-align: center;
  }
`;

export const Header = styled.div`
  height: 20rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffffff;
  filter: brightness(80%);
`;

export const Carroussel = styled.div`
  height: 20rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  flex-wrap wrap;
  
  //aa
`;

export const BottomController = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 4rem;
  align-items: center;
  margin-bottom: -1em;
`;

export const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconClickable = styled.i`
  cursor: pointer;
`;

const injectBackgroud = ({ isactive }) => (isactive ? "#FFFFFF" : "#A3A6A6");

export const Circle = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: ${injectBackgroud};
  margin-left: 1rem;
`;

export const ItemFerrugem = {
  title: "Ferrugem",
  description: `A ferrugem é a doença sobre a qual foi mais desenvolvido pesquisa devido
  sua importância. No cafeeiro, ela é causada pela ação do fungo Hemileia vastatrix, que é um
  parasita foliar obrigatório do café. Ela ocorre em todas as regiões produtoras de café no Brasil
  e na América Central.`,
  image: ferrugem_capa,
};

export const ItemCercos = {
  title: "Cercosporiose",
  description: `Causada pelo fungo Cercospora coffeicola, uma das principais e mais antigas doenças conhecidas do cafeeiro. Pode ocorrer tanto no viveiro quanto no campo.

  No viveiro de mudas, a doença é favorecida por regas diárias, por excesso de adubação com K e por falta de Ca.
  `,
  image: cercospora_capa,
};

export const ItemMancha = {
  title: "Mancha Aureolada",
  description: `A mancha aureolada é uma doença bacteriana que ataca folhas, rosetas, frutos novos e ramos do cafeeiro, atingindo mudas no viveiro e plantas no campo, ocorrendo principalmente nas regiões mais frias do Estados do Paraná, São Paulo e Sul de minas e em regiões altas e desprotegidas de ventos. `,
  image: mancha_capa,
};
export const FIVE_SECONDS = 5000;

export const Imagems = [
  homeBg,
  folhaBg,
  foto_home_capa,
  foto1_home_capa,
  foto2_home_capa,
  foto3_home_capa,
  foto4_home_capa,
];
