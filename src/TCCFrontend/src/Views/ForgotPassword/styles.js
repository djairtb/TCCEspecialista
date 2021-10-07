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

  @media (max-width: 1200px) {
    position: fixed;
  }

  @media (max-width: 330px) {
    position: fixed;
    height: 90%;
  }
`;

export const FormTitle = styled.h1`
  display: flex;
  color: ${injectColor};
  display: flex;
  justify-content: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  @media (max-width: 1300px) {
    text-align: center;
  }

  @media (max-width: 300px) {
    text-align: center;
    font-size: 24px;
  }
`;

export const RegisterLink = styled(Link)`
  color: #444242;
  font-size: 1em !important;

  @media (max-width: 900px) {
    font-size: 1.3em;
    text-align: center;
  }
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

  @media (max-width: 2500px) {
    background-repeat: no-repeat;
    background-size: cover;
  }
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

  @media (max-width: 2500px) {
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
  }
`;

export const Line = styled.hr`
  width: 380px;
  margin-top: -20px;

  @media (max-width: 1100px) {
    width: 100px;
  }
`;

export const Subtitle = styled.p`
  font-weight: bold;
  text-align: center;
  margin-top: 1px;

  @media (max-width: 800px) {
    text-align: start;
  }
`;
