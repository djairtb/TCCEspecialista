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
    box-shadow: 20px 5px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

export default memo(Button);
