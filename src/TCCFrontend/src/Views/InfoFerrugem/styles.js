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
    "A ferrugem é um fungo da espécie Hemileia vastatrix que ataca o cafeeiro. É a doença mais importante em termos de necessidade de controle e se caracteriza pelo aparecimento de pústulas com esporos de coloração amarelo escura a marrom na superfície das folhas, a partir da emergência até o estádio de maturação, provocando desfolha.",
  InformSymp:
    "Os sintomas da doença surgem na face inferior da folha. No início, as manchas são pequenas, variando de 1 a 3 mm de diâmetro, com coloração amarelo-pálida. Posteriormente, as manchas podem atingir até 2 cm de diâmetro e passam a exibir coloração amarelo-alaranjada e aspecto pulverulento. Nessa fase é possível observar lesões cloróticas amarelas na face superior da folha, correspondentes às pústulas existentes na face inferior. Essas lesões aumentam de tamanho, e o centro adquire aspecto necrótico.",
  InfoTreatm:
    "O uso de cultivares resistentes é o melhor método de controle. Os fungicidas de contato, principalmente os cúpricos, e os sistêmicos podem ser utilizados para o controle preventivo da doença. Recomenda-se efetuar alternância entre fungicidas de contato e sistêmicos. O emprego de fungicidas sistêmicos pode ser via foliar ou via solo. A calda viçosa, uma mistura de nutrientes que apresenta efeito fungicida, também é utilizada no controle. Sempre usar produtos que sejam registrados para as culturas..",
};
