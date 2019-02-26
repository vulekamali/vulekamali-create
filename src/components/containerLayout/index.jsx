import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 280px;

  @media screen and (min-width: 450px) {
    max-width: 1066px;
  }
`;

const ContainerLayout = ({ children }) => (
  <Container>
    { children }
  </Container>
);

export default ContainerLayout;
