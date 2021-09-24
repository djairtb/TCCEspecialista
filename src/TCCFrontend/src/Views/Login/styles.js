import styled from "styled-components";
import { Link } from "react-router-dom";
import loginBackground from "../../Images/login-background.jpg";

export const injectColor = ({ theme }) => theme.defaultColor;

export const Form = styled.form`
  width: 30%;
  padding: 2rem;
  background: transparent;
  position: absolute;
  right: 0;
  top: 0;
  height: -webkit-fill-available;
  background-color: #e5e5e5;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

export const FormTitle = styled.h1`
  display: flex;
  justify-content: center;
  color: ${injectColor};
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

export const RegisterLink = styled(Link)`
  color: #444242;
  font-size: 1em !important;
`;

export const Container = styled.div`
  height: 100vh;
`;

export const FormItem = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const Opacity = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-repeat: no-repeat;
  
  background: url(${loginBackground});
  width: 100%;
  height: 100%;
  filter: brightness(60%);
`;

export const Line = styled.hr`
  width: 170px;
  margin-top: -20px;

`;

export const Subtitle = styled.p`
  margin-top: -1px;
  margin-left: 0.5em;
  margin-right: 0.5em;
  color:  #649760;
`;