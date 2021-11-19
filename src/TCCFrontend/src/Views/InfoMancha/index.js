import React, { useState, useCallback, useEffect, useRef } from "react";
import image1 from "../../Images/mancha1.JPG";
import image2 from "../../Images/mancha2.jpg";
import image3 from "../../Images/mancha3.png";
import image4 from "../../Images/mancha4.JPG";
import {
  Title,
  Subtitle,
  Line,
  Container,
  BottomController,
  Circle,
  HeaderItem,
  Header,
  IconClickable,
  CircleContainer,
  TitleInf,
} from "./styles";

function InfoMancha() {
  const INFOS = {
    InfoDiasese:
      "Antigamente a mancha aureolada era mais comum em locais frios, como Paraná e São Paulo, mas ela vem se espalhando e hoje em dia não se encontra mais apenas em locais com temperaturas menores (Rehagro). É mais perigosa para lavouras novas (com pelo menos 4 anos) mas as lavouras mais antigas também podem ser acometidas pela bactéria. Estudos novos com base em observações realizadas em campo, mostram que as plantas mais fracas e com diversas deficiências nutricionais são mais propícias a serem atacadas por essa bactéria.",
    InformSymp:
      "A doença acomete as folhas, frutos novos e ramos, podendo ser vista em viveiros e campos. Os ramos atacados geralmente ficam com uma cor escura e logo depois a bactéria acomete as folhas, deixando-as com uma mancha necrótica, podendo ou não ter um halo de cor amarelo em volta. Tais sintomas andam junto com a desfolha e a diminuição crescente de produção de fotoassimilados (compostos que são resultantes de fotossíntese. São normalmente utilizados como uma forma de fonte de energia pelas bactérias que realizam a fixação utilizando nitrogênio nas raízes das plantas).  A folhas velhas apresentam manchas mais escuras e formato irregular, tendo essas manchas por toda a folha inclusive nas bordas.  Geralmente as partes em necrose se rompem, perfurando a folha no centro da mancha. As manchas têm em média de 5 a 20mm.  Nos órgãos florais, a bactéria faz com que elas caiam, diminuindo assim o ritmo da produção. Se não controlada, a mancha aureolada pode causar a perda total da planta em pelo menos um ano. Nos ramos, as lesões são mais escurecidas, podendo assim diferenciar-se da Phoma e da Cercosporiose (Rehagro).",
    InfoTreatm:
      "O melhor controle é sem dúvidas evitar ou dificultar o máximo possível a entrada da bactéria, pois ações preventivas são muitas vezes mais eficazes que ações corretivas, até porque as ações corretivas são mais complicadas, pois fazem uso de bactericidas que na grande maioria das vezes são pouco eficientes e podem com o tempo acabar gerando resistência da bactéria ao bactericida, tornando o controle difícil e arrastado. Por isso, se for utilizar controles químicos, uma boa saída são as pulverizações preventivas com cúpricos no campo e Hidróxido de Cobre e Casugamicina no viveiro. Muitas vezes agricultores optam por uma série de pulverizações com Casugamicina mas apenas quando a bactéria já está instalada, porém como mencionado anteriormente, após a infecção as ações se tornam mais complicadas e muitas veze inúteis. Por isso, pesquisadores tem recomendado o uso de Casugamicina e Hidróxido de Cobre de maneira preventiva e em lavouras adultas. A prescrição e dosagens, segundo pesquisadores e agricultores profissionais se dá desta forma: No viveiro: Hidróxido de cobre, Casugamicina. No campo: Hidróxido de cobre – 2 – 2,5 kg/ha; Oxicloreto de cobre – 3-4 kg/ha; Hidróxido de cobre 2 kg + mancozeb 2 kg. Há também pesquisas que relatam melhores resultados quando utilizado Oxicloreto de cobre 4 Kg/ha sem misturas (Agrolink).",
  };

  const Imagems = [image1, image2, image3, image4];

  const { InfoDiasese, InformSymp, InfoTreatm } = INFOS;

  const FIVE_SECONDS = 5000;

  const [index, setIndex] = useState(0);

  const intervalRef = useRef();

  const updateImage = useCallback(() => {
    setIndex((prevState) => (prevState + 1) % Imagems.length);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(updateImage, FIVE_SECONDS);
    return () => clearInterval(intervalRef.current);
  }, []);

  const onLeftClick = useCallback(() => {
    clearInterval(intervalRef.current);
    if (index !== 0) {
      setIndex(index - 1);
    }
  }, [index]);

  const onRightClick = useCallback(() => {
    clearInterval(intervalRef.current);
    if (index < Imagems.length - 1) {
      setIndex(index + 1);
    } else if (index === Imagems.length - 1) {
      setIndex(0);
    }
  }, [index]);

  return (
    <Container>
      <Title>Mancha Aureolada</Title>
      <Line />
      <TitleInf>Informações</TitleInf>

      <Header style={{ backgroundImage: `url(${Imagems[index]})` }}>
        <HeaderItem>
          <BottomController>
            <IconClickable
              className="fa fa-chevron-left fa-lg"
              aria-hidden="true"
              onClick={onLeftClick}
            />
            <CircleContainer>
              {Array.from({ length: Imagems.length }).map((_, key) => (
                <Circle key={key} isactive={key === index} />
              ))}
            </CircleContainer>
            <IconClickable
              className="fa fa-chevron-right fa-lg"
              aria-hidden="true"
              onClick={onRightClick}
            />
          </BottomController>
        </HeaderItem>
      </Header>

      <Subtitle>{InfoDiasese}</Subtitle>
      <Line />
      <TitleInf>Sintomas</TitleInf>

      <Subtitle>{InformSymp}</Subtitle>
      <Line />
      <TitleInf>Tratamento</TitleInf>

      <Subtitle>{InfoTreatm}</Subtitle>
    </Container>
  );
}

export default InfoMancha;
