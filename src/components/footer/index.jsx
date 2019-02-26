import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import ContainerLayout from '../containerLayout';

const Wrapper = styled.div`
  width: 100%;
  height: 125px;
  background-color: #323130;
  margin-top: 550px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 450px) {
    margin-top: 490px;
  }

  @media screen and (min-width: 650px) {
    margin-top: 420px;
  }

  @media screen and (min-width: 850px) {
    margin-top: 330px;
    height: 90px;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 340px;
  }
`;

const TextContainer = styled.div`
  width: 100%;

  @media screen and (min-width: 850px) {
    max-width: 495px;
    margin: 0 auto;
  }
`;

const Text = styled(Typography)`
  color: rgba(255, 255, 255, 0.6);
  font-family: Lato;
  font-style: italic;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.05em;
`;

const Footer = () => (
  <Wrapper>
    <ContainerLayout>
      <TextContainer>
        <Text>
          Note that all projects listed on Vulekamali Create are provided by volunteers
          and external parties. Projects listed on Vulekamali Create only related to the South
          African National Treasury and Vulekamali insofar that they use data supplied by the
          latter.
        </Text>
      </TextContainer>
    </ContainerLayout>
  </Wrapper>
);

export default Footer;
