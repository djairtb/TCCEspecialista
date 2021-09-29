import styled from "styled-components";
import ContBackground from "../../Images/caderno_graos.jpg";


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: url(${ContBackground});
    background-size: cover;
    margin-top: -0.2em;
    position: fixed;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

export const Box = styled.div`
  width: 40%;
  height: 70%;
  background-color: hsl(57deg 25% 87% / 1%);
  display: flex;
  justify-content: center;
  margin-left: 12em;
  margin-top: 7em;
  position: fixed;
  border-radius: 2em;
  transform: rotateZ(19deg);
  position: fixed;
 

  &:hover {
    box-shadow: 20px 5px 10px rgba(0,0,0,0.5);
    cursor: pointer;
  }



  @media (max-width: 900px) {
    width: 60%;
    margin-left: 7em;
    margin-top: 4em;
    padding: -1em;
    position: fixed;
  }

  @media (min-width: 900px) and (max-width: 1100px) {
    margin-left: 9em;
    margin-top: 2em;
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
  white-space: pre-line;

  @media (min-width: 300px) and (max-width: 900px) {
    margin-left: 2em;
    margin-top: 1em;
  }


`;

export const Title = styled.p`
  font-size: 26px;
  justify-content: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: bold;
  //background-color: red;
  height: 10%;
  position: absolute;
  margin-right: 9em;
  @media (min-width: 300px) and (max-width: 1000px) {
    margin-left: 2em;
    margin-top: 3em;
    margin-bottom: 2em;
  }

  @media (min-width: 100px) and (max-width: 1200px) {
    margin-left: 3em;
    margin-top: 2em;
  }

  
  
`;

export const Phone = styled.p`
    font-size: 19px;
    white-space: pre-line;
    margin-bottom: 3em;
    @media (max-width: 1200px) {
      margin-bottom: 1em;
      margin-top: 3em;
    }
`

export const Email = styled.p`
    font-size: 19px; 
    margin-bottom: 3em; 
    @media (max-width: 1200px) {
      margin-bottom: 1em;
    }  
`

export const Address = styled.p`
    font-size: 19px;
    margin-bottom: 3em;
    @media (max-width: 1200px) {
      margin-bottom: 1em;
    }
`



