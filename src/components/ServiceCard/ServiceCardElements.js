import styled from "styled-components";

export const ServicesCard = styled.div`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 20px;
  text-align: center;
`;

export const ServicesIcon = styled.img`
  display: block;
  max-width: 80%;
  height: 300px;
`;

export const ServicesH2 = styled.h2`
  font-size: 24px;
  color: #cd6133;
  margin-bottom: 20px;
`;

export const ServicesP = styled.p`
  font-size: 16px;
  color: #010101;
  margin-bottom: 30px;
`;
