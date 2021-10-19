import aboutUsBackground from "../../Images/aboutus_capa.png";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  box-sizing: border-box;
  display: block;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  position: absolute;
  overflow: hidden;
`;
export const BannerContact = styled.div`
  width: 100%;
  height: 40%;
  background-color: #b1cfbf;
  margin-top: -1.9em;
  font-weight: bold;

  @media (min-width: 1700px) and (max-width: 2000px) {
    margin-top: -2.5em;
  }
`;

export const Telephone = styled.div`
  //background-color: red;
  margin-top: -2em;
  justify-content: center;
  margin-right: 3em;

  @media (min-width: 360px) and (max-width: 500px) {
    margin-top: -2em;
    display: grid;
  }
  @media (min-width: 250px) and (max-width: 350px) {
    width: 15em;
    display: grid;
    //background-color: blanchedalmond;
    margin-left: -3em;
    margin-top: -2em;
    font-size: 22px;
  }
`;

export const Email = styled.div`
  // background-color: blueviolet;

  @media (min-width: 360px) and (max-width: 500px) {
    width: 15em;
    display: grid;
    //background-color: blanchedalmond;
    margin-left: -2em;
    margin-top: -1em;
  }

  @media (min-width: 250px) and (max-width: 350px) {
    width: 15em;
    display: grid;
    margin-left: -3em;
    margin-top: -1em;
    font-size: 22px;
  }
`;

export const Address = styled.div`
  //background-color: aquamarine;
  margin-right: 1em;
  width: 3wm;

  @media (min-width: 360px) and (max-width: 500px) {
    margin-right: 3em;
    width: 11em;
    display: grid;
    margin-top: -1em;
  }
  @media (min-width: 250px) and (max-width: 350px) {
    width: 15em;
    display: grid;
    margin-left: -3em;
    margin-top: -1em;
    font-size: 22px;
    height: 6em;
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
  color: #1b524b;
  padding: 3em;

  @media (min-width: 250px) and (max-width: 500px) {
    font-size: 23px;
  }
  @media (min-width: 1700px) and (max-width: 2000px) {
    font-size: 40px;
  }
`;

export const Cont = styled.div`
  width: 100%;
  height: 60%;
  background-color: white;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  font-size: 23px;
  display: flex;
`;

export const BannerTwo = styled.div`
  width: 100%;
  height: 30%;
  // background-color: purple;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  font-size: 25px;
  padding: 2em;
  margin-top: -2em;

  @media (min-width: 250px) and (max-width: 500px) {
    height: 60%;
    margin-top: -3em;
  }
`;
