import React, { memo } from "react";
import { CardContainer, CardHeader, CardBody } from "./styles";
import Button from "../Button";

function Card({ title, description, image }) {
  return (
    <CardContainer>
      <CardHeader style={{ backgroundImage: `url(${image})` }}>
        {title}
      </CardHeader>
      <CardBody>
        <p>{description}</p>
        <Button>Saiba Mais</Button>
      </CardBody>
    </CardContainer>
  );
}

export default memo(Card);
