import styled from "styled-components";
import ContBackground from "../../Images/foto2.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${ContBackground});
  background-size: cover;
  margin-top: -0.2em;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

export const Box = styled.div`
  width: 30%;
  height: 47%;
  background-color: hsl(57deg 25% 87% / 65%);
  display: flex;
  justify-content: center;
  margin-left: 30em;
  margin-top: 2em;
  position: fixed;
  border-radius: 1em;
  float: right;
  padding: 1em;

  @media (max-width: 500px) {
    margin-left: 4em;
    width: 80%;
    vertical-align: middle;
    background-color: red;
    margin-top: 3em;
    padding: 1em;
  }

  @media (min-width: 501px) and (max-width: 700px) {
    margin-left: 5em;
    width: 60%;
    height: 48%;
    vertical-align: middle;
    background-color: blue;
    margin-top: 3em;
    padding: 1em;
  }

  @media (min-width: 701px) and (max-width: 1000px) {
    margin-left: 15em;
    width: 50%;
    height: 48%;
    vertical-align: middle;
    background-color: yellow;
    margin-top: 3em;
    padding: 1em;
  }

  @media (min-width: 1001px) and (max-width: 1300px) {
    margin-left: 25em;
    width: 35%;
    height: 48%;
    vertical-align: middle;
    background-color: red;
    margin-top: 3em;
    padding: 1em;
  }
`;

export const Contact = styled.div`
  margin-top: 2em;
  //background-color: blue;
  width: 100%;
  height: 40%;
  margin-top: 2em;
  padding: 3em;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: 26px;
  justify-content: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: bold;
  //background-color: red;
  height: 10%;
  position: absolute;
`;

export const Phone = styled.p`
  font-size: 19px;
  margin-top: -1em;
`;

export const Email = styled.p`
  font-size: 19px;
  margin-top: 2em;
`;

export const Address = styled.p`
  font-size: 19px;
  margin-top: 2em;
`;
