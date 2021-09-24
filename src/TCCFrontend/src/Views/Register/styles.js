import styled from "styled-components";
import { Link } from "react-router-dom";
import loginBackground from "../../Images/login-background.jpg";

export const injectColor = ({ theme }) => theme.defaultColor;

export const Form = styled.form`
  width: 27%;
  padding: 3rem;
  background: transparent;
  position: absolute;
  right: 0;
  height: -webkit-fill-available;
  background-color: #e5e5e5;
`;

export const FormTitle = styled.h1`
  display: flex;
  color: ${injectColor};
  display: flex;
  justify-content: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

  @media(max-width: 800px) {
    text-align: center;
    
  }
  `;

export const RegisterLink = styled(Link)`
  color: #444242;
  font-size: 1em !important;
`;

export const Container = styled.div`
  height: 50vh;
`;

export const FormItem = styled.div`
  justify-content: center;
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;

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
  width: 270px;
  margin-top: -20px;

  @media(max-width: 800px) {
    width: 170px;
    position: relative;
    
  }

`;