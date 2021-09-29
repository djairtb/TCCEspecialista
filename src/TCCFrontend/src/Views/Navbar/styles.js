import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #b3cca7;
  padding: 1rem;

  @media (max-width: 800px) {
  
  }
`;

export const Img = styled.img`
  height: 3rem;
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
