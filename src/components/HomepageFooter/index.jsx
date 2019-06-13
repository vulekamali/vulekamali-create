import React from 'react';
import ContainerLayout from '../containerLayout';

import BulbIcon from '../../images/white-bulb';
import LikeIcon from '../../images/white-like';

import {
  Wrapper,
  Heading,
  Underline,
  Description,
  TextContainer,
  Title,
  FooterContainer,
  FooterText,
  Container,
} from './styled';

const Expectations = () => (
  <Wrapper>
    <ContainerLayout>
      <div>
        <Heading>WHAT IS VULEKAMALI CREATE?</Heading>
        <Underline />
        <Container>
        <Description>
          <BulbIcon />
          <TextContainer>
            <Title>A Sharing Platform</Title>
          </TextContainer>
        </Description>
        <Description>
          <LikeIcon />
          <TextContainer>
            <Title>A Collaborative Space</Title>
          </TextContainer>
        </Description>
        <Description>
          <LikeIcon />
          <TextContainer>
            <Title>A Place for Learning</Title>
          </TextContainer>
        </Description>
        </Container>
        
      </div>
      <FooterContainer>
        <FooterText>
          Note that all projects listed on Vulekamali Create are provided by volunteers
          and external parties. Projects listed on Vulekamali Create only related to the South
          African National Treasury and Vulekamali insofar that they use data supplied by the
          latter.
        </FooterText>
      </FooterContainer>
    </ContainerLayout>
  </Wrapper>
);

export default Expectations;
