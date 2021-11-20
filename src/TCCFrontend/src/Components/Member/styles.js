import styled from "styled-components";

export const MemberContainer = styled.div`
  height: 17rem;
  width: 10em;
  //border: 1px solid black;

  align-items: center;
  justify-content: space-around;
  margin-left: 1em;
  flex-direction: column;

  &:hover {
    box-shadow: 20px 5px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  
  @media (max-width: 399px) {
    display: flex;
    flex-wrap wrap;
    margin-bottom: 4em;
    margin-left: 3em;
    border: 1px solid black;
      
  }

  @media (min-width: 405px) and (max-width: 1300px) {
    display: flex;
    flex-wrap wrap;
    //margin-bottom: 4em;
    //margin-left: 3em;
    margin-bottom: 1em;
    margin-left: 0.6em;
    //border: 1px solid black;
  }

`;

export const MemberHeader = styled.div`
  height: 10rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 30px;
  filter: brightness(80%);
  width: 5.2em;
  margin-right: 1.6em;

  @media (max-width: 1300px) {
    width: 100%;
    margin-left: 0.039em;
  }
`;

export const MemberBody = styled.div`
  padding: 1rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: justify;
  color: #636363;
  font-size: 13px;
  justify-content: center;

  @media (max-width: 1300px) {
   margin-top: -1em;
   justify-content: center;
   flex-wrap: wrap;
   justify-content: space-between;
   justify-content: flex-start;
    margin-left: -1em;
  
`;
