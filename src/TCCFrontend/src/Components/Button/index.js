import React, { memo } from "react";
import styled from "styled-components";

const injectColor = ({ theme }) => theme.defaultColor;
const injectWidth = ({ width }) => width || "auto";

const Button = styled.button`
  color: white;
  border: 2px solid ${injectColor};
  font-size: 1.5em;
  background-color: ${injectColor};
  width: ${injectWidth};
  border-radius: 0.4em;
  &:hover {
    cursor: pointer;
  }
 
  
`;

export default memo(Button);
