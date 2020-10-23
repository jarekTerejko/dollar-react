import styled from "styled-components";

export const ServicesContainer = styled.section`
  max-width: 1100px;
  padding: 100px 15px;
  margin: 0 auto;
`;

export const ServicesH1 = styled.h1`
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  color: #cd6133;
  text-align: center;
  margin-bottom: 50px;
`;

export const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-gap: 30px;
`;
