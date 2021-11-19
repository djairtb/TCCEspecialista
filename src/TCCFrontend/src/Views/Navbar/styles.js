import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000de;
  padding: 1rem;
  filter: brightness(80%);

  @media (max-width: 800px) {
    text-align: left;
  }
`;

export const Img = styled.img`
  height: 30px;
  margin-left: 4em;

  @media (max-width: 800px) {
    margin-left: 1em;
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

export const LogoutButton = styled.div`
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
