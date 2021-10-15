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
  height: 17%;
  background-color: #eee;
  position: absolute;
  margin-top: 24.7%;
  display: block;
  flex-wrap: wrap;
  overflow: auto;
  @media (min-width: 1700px) and (max-width: 2000px) {
    height: auto;
  }
`;

export const ContainerVision = styled.div`
  width: 100%;
  height: 22%;
  background-color: #cfbcc2;
  margin-top: 48.4%;
  display: block;
  overflow: auto;

  @media (min-width: 250px) and (max-width: 1000px) {
    height: 22%;
    margin-top: 31em;
  }
  @media (min-width: 1700px) and (max-width: 2000px) {
    height: 35%;
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
  @media (min-width: 1700px) and (max-width: 2000px) {
    height: auto;
  }
`;

export const ContainerWhoAreUs = styled.div`
  height: 10%;
  background-color: #cfbcc2;
  display: block;
  margin-top: 2em;
  padding: 1em;

  @media (min-width: 1300px) and (max-width: 2000px) {
    height: auto;
    margin-top: -3em;
  }

  @media (min-width: 200px) and (max-width: 1299px) {
    height: 220%;
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
  text-size: 25px;
  flex-wrap: wrap;
  padding: 2em;
  overflow: auto;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: #636363;
  text-align: justify;

  @media (min-width: 1700px) and (max-width: 2000px) {
    font-size: 30px;
  }
`;
export const Title = styled.p`
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  font-size: 30px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: black;

  @media (min-width: 1700px) and (max-width: 2000px) {
    font-size: 40px;
  }
`;

export const ContainerImages = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  padding: 1em;

  justify-content: space-around;
  flex-wrap wrap;
  flex-direction: inherit;
  margin-left: -2em;


  @media (max-width: 800px) {
    height: 80%;
    justify-content: space-around;
    flex-wrap wrap;
    margin-left: -3em;
    flex-direction: column;
    margin-bottom: 2em;
    align-content: center;
  }

  @media (min-width: 800px) and (max-width: 1300px) {
    height: 80%;
    justify-content: space-around;
    flex-wrap wrap;
    margin-left: -3em;
    flex-direction: column;
    margin-top: -3em;
    align-content: center;
  }



    
`;

export const imagems = styled.img`
  width: 50%;
`;

export const FileImg = styled.img`
  //width: 20%;
  //height: 100%;
  width: 150px;
  height: 150px;

  @media (max-width: 1100px) {
    width: 310px;
    margin-bottom: 1em;
    padding: 1em;
  }
`;
