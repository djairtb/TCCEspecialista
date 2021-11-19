import React, { memo } from "react";
import styled from "styled-components";

const injectWidth = ({ width }) => width || "auto";

const Input = styled.input`
  width: ${injectWidth};
  height: 35px;
  font-size: 1em;
  background-color: #dcdcdc;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  border-radius: 0.5em;
  margin-top: 7px;
  margin-bottom: 1em;

  @media (max-width: 500px) {
    width: 8em;
  }
`;

export default memo(Input);
