import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 280px;

  @media screen and (min-width: 450px) {
    max-width: 380px;
  }

  @media screen and (min-width: 650px) {
    max-width: 500px;
  }

  @media screen and (min-width: 850px) {
    max-width: 800px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1000px;
  }
`;

const ContainerLayout = ({ children }) => (
  <Container>
    { children }
  </Container>
);

export default ContainerLayout;
