import styled from "styled-components";

export const CardContainer = styled.div`
  height: 25rem;
  width: 250px;
  border: 3px solid #cec3c3;
  margin-bottom: 2em;

  &:hover {
    box-shadow: 20px 5px 10px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 600px) {
    margin-top: 1em;
    margin-bottom: 1em;
  }
`;

export const CardHeader = styled.div`
  height: 10rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 30px;
  filter: brightness(70%);
`;

export const CardBody = styled.div`
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

  @media (max-width: 600px) {
    font-size: 13.8px;
    text-align: justify;
  }
`;
