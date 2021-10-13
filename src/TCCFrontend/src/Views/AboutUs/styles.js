import aboutUsBackground from "../../Images/aboutus_capa.png";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100em;
  display: flex;
  box-sizing: border-box;
  display: block;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  background-color: #eee;
  position: absolute;
`;

export const ImageAbouUts = styled.div`
  width: 100%;
  margin-left: -3%;
  position: absolute;
  background-size: cover;
  display: block;
  background-color: black;
`;

export const ContainerMision = styled.div`
  width: 100%;
  height: 20%;
  background-color: #eee;
  position: absolute;
  margin-top: 24.7%;
  display: block;
  flex-wrap: wrap;
  overflow: auto;
`;

export const ContainerVision = styled.div`
  width: 100%;
  height: 25%;
  background-color: #cfbcc2;
  margin-top: 48.4%;
  display: block;
  overflow: auto;

  @media (min-width: 250px) and (max-width: 600px) {
    height: 37%;
    margin-top: 28em;
  }

  @media (min-width: 600px) and (max-width: 1400px) {
    height: 30%;
    margin-top: 40em;
  }
`;

export const ContainerValues = styled.div`
  height: 20%;
  background-color: #eee;
  margin-top: -5.9%;
  display: block;
  overflow: auto;

  @media (min-width: 250px) and (max-width: 1000px) {
    height: 20%;
  }
`;

export const ContainerWhoAreUs = styled.div`
  height: 35%;
  background-color: #cfbcc2;
  display: block;
  overflow: auto;

  @media (min-width: 250px) and (max-width: 1000px) {
    height: 50%;
  }
`;

export const Line = styled.hr`
  width: 20%;
`;

export const Img = styled.img`
  width: 103%;
  background-size: cover;
`;

export const Text = styled.p`
  text-align: -webkit-center;
  color: black;
  text-size: 20px;
  flex-wrap: wrap;
  padding: 2em;
  overflow: auto;
`;
export const Title = styled.p`
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  font-size: 25px;
`;

export const ContainerImages = styled.div`
  width: 100%;
  height: 30%;

  padding: 3em;
`;

export const imagems = styled.img`
  width: 50%;
`;
