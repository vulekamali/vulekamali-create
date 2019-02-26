import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1066px;
`;

const ContainerLayout = ({ children }) => (
  <Container>
    { children }
  </Container>
);

export default ContainerLayout;
