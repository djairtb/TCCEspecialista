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
`;

export const Line = styled.hr`
  width: 100vw;
  float: right;

  @media (max-width: 800px) {
    width: 500px;
  }
`;

export const Header = styled.div`
  height: 20rem;
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffffff;
  float: right;
  margin-left: 20%;
  border: 3px solid #cec3c3;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  border-radius: 1em;
  &:hover {
    box-shadow: 20px 5px 10px rgba(0.1, 0.1, 0.1, 0.1);
    cursor: pointer;
  }

  @media (max-width: 800px) {
    margin-left: 5%;
    width: 100%;
  }
`;

const injectBackgroud = ({ isactive }) => (isactive ? "#FFFFFF" : "#A3A6A6");

export const Circle = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: ${injectBackgroud};
  margin-left: 1rem;

  @media (max-width: 780px) {
    width: 20px;
    height: 20px;
  }
`;

export const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    width: 176%;
  }
`;

export const IconClickable = styled.i`
  cursor: pointer;
`;

export const Title = styled.p`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 10px;
  margin-top: 25px;
  font-size: 23px;
`;

export const TitleInf = styled.p`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 10px;
  margin-top: 25px;
  font-size: 20px;
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
  text-align: justify;
`;

export const HeaderItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 20em;
  width: 50%;
`;

export const BottomController = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 16rem;
  align-items: center;
`;

export const FIVE_SECONDS = 5000;

export const INFOS = {
  imagens: ["imagem1", "imagem2", "imagem3", "imagem4"],
  InfoDiasese:
    "Doença causada pelo fungo Cercospora coffeicola BerK. & Cooke, fungo necrotrófico, que invade as células e as matam, nutrindo-se das mesmas. Essa doença pode atacar desde mudas no viveiro causando intensa desfolha, afetando o crescimento e desenvolvimento das plantas, ou mesmo lavouras adultas, que além da queda de folhas pode proporcionar queda de frutos. Por isso, a falta de um manejo adequado e sob condições favoráveis para o desenvolvimento dessa doença, pode resultar em grandes perdas na produção.",
  InformSymp:
    "A Cercospora pode atacar tanto folhas quanto frutos em desenvolvimento, nas folhas os sintomas característicos são manchas circulares de coloração castanho-clara a escura, com o centro branco-acinzentado, quase sempre envolvidas por um halo amarelado.",
  InfoTreatm:
    "Como medidas gerais de controle é importante evitar as deficiências e desequilíbrios nutricionais, visto que a nutrição tem grande influência na incidência dessa doença. Dessa forma, um planejamento adequado e equilibrado das adubações e um acompanhamento das análises foliares torna-se essencial. Estando sempre atento a relação dos nutrientes, principalmente cálcio e potássio. Também, um fornecimento adequado de matéria orgânica, tanto na preparação de mudas no viveiro, como no campo, com o intuito de proporcionar melhores condições nutricionais. No plantio, além de evitar plantios tardios, é importante que seja feita uma boa preparação do solo, a fim de evitar a compactação do mesmo, para que não afete na absorção de nutrientes pelas raízes. Além disso, alguns estudos sugerem a utilização de silício no controle da cercosporiose, os mecanismos pelos quais o silício pode conferir resistência a determinada doença podem ser por acúmulo do elemento na parede das células da epiderme e cutícula, acúmulo no local de penetração do patógeno (barreiras naturais).",
};
