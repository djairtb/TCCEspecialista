import styled from "styled-components";
import { Link as RouteLink } from "react-router-dom";

export const Link = styled(RouteLink)`
  cursor: pointer;
  color: white;
  font-size: 20px;
  text-decoration: none;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  //opacity: 0.9;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const HeaderItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;

  @media (max-width: 400px) {
    text-align: center;
  }
`;

export const Header = styled.div`
  height: 20rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #ffffff;
  filter: brightness(80%);
`;

export const Carroussel = styled.div`
width: 90%;
margin: auto;
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  flex-wrap wrap;
 
`;

export const BottomController = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 4rem;
  align-items: center;
  margin-bottom: -1em;
`;

export const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconClickable = styled.i`
  cursor: pointer;
`;

const injectBackgroud = ({ isactive }) => (isactive ? "#FFFFFF" : "#A3A6A6");

export const Circle = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: ${injectBackgroud};
  margin-left: 1rem;
`;
