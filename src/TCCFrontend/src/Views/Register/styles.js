import styled from "styled-components";
import { Link } from "react-router-dom";
import loginBackground from "../../Images/login-background.jpg";

export const injectColor = ({ theme }) => theme.defaultColor;

export const Img = styled.img`
  height: 30px;
  margin-right: 10px;
  @media (max-width: 800px) {
    margin-bottom: 1em;
    margin-top: -7px;
  }
`;

export const Form = styled.form`
  width: 27%;
  padding: 3rem;
  background: transparent;
  position: absolute;
  right: 0;
  height: -webkit-fill-available;
  background-color: #e5e5e5;

  @media (max-width: 300px) {
    width: 50%;
  }
`;

export const FormTitle = styled.h1`
  display: flex;
  color: ${injectColor};
  display: flex;
  justify-content: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  @media (max-width: 900px) {
    text-align: center;
    font-size: 22px;
  }
`;

export const RegisterLink = styled(Link)`
  color: #444242;
  font-size: 1em;

  @media (max-width: 900px) {
    font-size: 1.3em;
    text-align: center;
    font-size: 17px;
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

  @media (max-width: 1400px) {
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

  @media (max-width: 2700px) {
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
  }
`;

export const Line = styled.hr`
  width: 270px;
  margin-top: -20px;

  @media (max-width: 900px) {
    width: 170px;
    position: relative;
  }

  @media (max-width: 500px) {
    width: 100px;
  }
`;
