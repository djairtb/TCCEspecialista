import styled from "styled-components";

 export const Container = styled.div`
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
background-color: white;
font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
"Lucida Sans Unicode", Geneva, Verdana, sans-serif;
overflow: hidden;
height: 45rem;
padding: 2em;
display: block;
    `;

export const ContainerDiv1 = styled.div`
  width: 100vw;
  /* background-color: rgb(239 224 224); */
  background-color: white;
  height: 25em;
  display: inline-block;
  -webkit-column-count: 2;
  margin-top: -2em;
  margin-left: -2em;
  overflow: hidden;
  display: block;

  @media (max-width: 800px) {
    flex-direction: column;
    position: relative;
    margin-top: 1em;
    padding: 0em;
  }
`;

export const ContainerDiv2 = styled.div`
  background-color: white;
  width: 100vw;
  height: 25em;
  display: inline-block;
  -webkit-column-count: 2;
  margin-top: 1em;
  margin-left: -2em;
  margin-left: -2em;
  overflow: hidden;
  display: block;

  @media (max-width: 800px) {
    flex-direction: column;
    position: relative;
    margin-top: 0em;
    margin-left: -3em;
  }
`;

export const ContainerHistory = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  overflow: auto;
  float: right;

  @media (max-width: 1000px) {
    flex-direction: column;
    position: relative;
    margin-top: 0em;
    margin-left: 0em;
    width: 13em;
    height: 20em;
  }
`;

export const ContainerMissao = styled.div`
  background-color: rgb(239 224 224);
  /*  background-color: #d9ead8;*/
  width: 105%;
  height: 100%;
  margin: 10px;
  overflow: auto;
  margin-left: -1em;

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 13em;
    height: 20em;
  }
`;

export const ContainerVisao = styled.div`
  background-color: rgb(228 174 174 / 70%);
  width: 95%;
  height: 80%;
  margin: 10px;
  margin-left: 2em;
  overflow: auto;
  margin-top: -0em;
`;
export const ContainerValores = styled.div`
  background-color: #b3cca7;
  width: 95%;
  height: 80%;
  overflow: auto;
  margin-left: -1em;
`;
export const Title = styled.p`
  color: white;
  text-align: center;
  font-size: 200%;
`;

export const TitleHistory = styled.p`
  color: black;
  text-align: center;
  font-size: 200%;
`;

export const Text = styled.p`
  font-size: 90%;
  text-indent: 1.5em;
  margin-top: 0;
  text-align: start;
  margin: 2em;
`;
