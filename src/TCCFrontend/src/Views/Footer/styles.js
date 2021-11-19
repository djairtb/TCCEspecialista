import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000de;
  padding: 1rem;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  // position: fixed;
  // bottom: 0;

  @media (max-width: 800px) {
    height: 10%;
  }
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  color: white;
  font-size: 20px;
  text-decoration: none;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

  //opacity: 0.9;
`;

export const MobileContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Text = styled.div`
  font-size: 15px;
  color: white;

  @media (max-width: 500px) {
    font-size: 15px;
    margin-top: -1em;
    float: left;
    text-align: left;
    padding: 0.5em;
  }
`;

export const Icons = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-around;
  float: left;
  font-weight: bold;
  color: white;
  margin-right: 2em;
  align-items: end;
  cursor: pointer;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 15px;

  @media (max-width: 800px) {
    width: 20%;
    margin-bottom: 1em;
  }
`;

export const IconLink = styled.a`
  cursor: pointer;
  color: white;
  text-decoration: none;

  @media (max-width: 400px) {
    align-items: center;
  }
`;
