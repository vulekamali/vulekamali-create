import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0  20px;
`;

const ContainerLayout = ({ children }) => (
  <Container>
    { children }
  </Container>
);

export default ContainerLayout;
