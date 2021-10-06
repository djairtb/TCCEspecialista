import React, { memo } from "react";
import { CardContainer, CardHeader, CardBody } from "./styles";

function Card({ title, description, image, children }) {
  return (
    <CardContainer>
      <CardHeader style={{ backgroundImage: `url(${image})` }}>
        {title}
      </CardHeader>
      <CardBody>
        <p>{description}</p>
        {children}
      </CardBody>
    </CardContainer>
  );
}

export default memo(Card);
