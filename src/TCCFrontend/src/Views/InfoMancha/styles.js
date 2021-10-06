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

export const Title = styled.p`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 10px;
  margin-top: 25px;
  font-size: 23px;
`;

export const DangerTitle = styled.p`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 10px;
  margin-top: 25px;
  color: ${({ theme }) => theme.dangerColor};
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
  InfoDiasese:
    "A Mancha aureolada é uma doença causada pelo ataque da bactéria Pseudomonas seryngae pv garcae, que causa sintomas sobre as folhas, rosetas, frutos novos, ramos laterais e, ainda, ramos do ponteiro das plantas, atacando tanto mudas no viveiro, como plantas novas no campo e, também, cafeeiros adultos.",
  InformSymp:
    "A doença ataca folhas, ramos, frutos novos e rosetas, podendo ser encontrada tanto em viveiros, quanto no campo. A bactéria ataca de forma sistêmica os ramos, que inicialmente ficam com uma coloração escura. Em seguida, ataca as folhas e o sintoma se caracteriza por uma mancha necrótica de coloração parda, podendo ser envolvida por um halo-amarelado, consequentemente levando à queda das folhas e diminuição da produção de fotoassimilados pela planta. Já nos órgãos florais do cafeeiro, causa a queda de flores e frutos chumbinhos, e consequentemente diminuição da produção. O ataque da doença pode causar a morte da planta em até 1 ano, sintoma que as vezes pode ser confundido com outras doenças, como rizoctoniose.",
  InfoTreatm:
    "Primeiramente, é preciso entender que o manejo da Mancha Aureolada, como de qualquer outra bactéria, é complicado, pois o melhor controle é evitar sua entrada na planta, iniciando com plantio de mudas sadias e livres da bactéria. Visto que a única forma de tentar controlar a doença é por meio de aplicações de bactericidas, que são pouco eficientes e podem ocasionar facilmente resistência da bactéria ao produto, o controle é difícil e oneroso. Controles químicos estão obtendo melhores resultados, por meio de pulverizações preventivas com cúpricos no campo, e Hidróxido de Cobre e Casugamicina no viveiro, único antibiótico com registro para a cultura do café em viveiros no mercado. Nota-se, como estratégia de muitos produtores, pulverizações seguidas com Casugamicina, quando a bactéria já está na planta. Porém, após a introdução da doença na planta, esta tática de controle muitas vezes é uma medida irracional do produtor em controlar a doença, pois tem eficiência muito baixa. Desta forma, tem-se recomendado o uso da Casugamicina e Hidróxido de Cobre em viveiros, e em lavouras adultas o uso de cúpricos de maneira preventiva nas regiões sujeitas à enfermidade, já que não existe registro para o Casugamicina em lavouras adultas.",
};
