import styled from "styled-components";

export const CardContainer = styled.div`
  height: 25rem;
  width: 250px;
  border: 1px solid #cec3c3;
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
`;

export const CardBody = styled.div`
  padding: 1rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
