import React, { memo } from "react";
import styled from "styled-components";

const injectWidth = ({ width }) => width || "auto";

const Input = styled.input`
  width: ${injectWidth};
  height: 35px;
  font-size: 1em;
  background-color: #dcdcdc;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  border-radius: 0.5em;
  margin-top: 7px;

  @media (max-width: 800px) {
    width: 480%;
  }
  `;

export default memo(Input);
