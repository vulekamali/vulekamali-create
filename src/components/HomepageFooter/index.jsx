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
  Text,
  FooterContainer,
  FooterText,
} from './styled';

const Expectations = () => (
  <Wrapper>
    <ContainerLayout>
      <div>
        <Heading>WHAT IS VULEKAMLI CREATE?</Heading>
        <Underline />
        <Description>
          <BulbIcon />
          <TextContainer>
            <Title>A Sharing Platform</Title>
            <Text>asdasdasdasdasdasdasd sdg asfd g sd gfasd g sdag sd gd
            SDG ASAD AF SD ASD sd ds fh asfd gsad gh asfh sd g.
            </Text>
          </TextContainer>
        </Description>
        <Description>
          <LikeIcon />
          <TextContainer>
            <Title>A Collaborative Space</Title>
            <Text>asdasdasdasdasdasdasd sdg asfd g sd gfasd g sdag sd gd
            SDG ASAD AF SD ASD sd ds fh asfd gsad gh asfh sd g.
            </Text>
          </TextContainer>
        </Description>
        <Description>
          <LikeIcon />
          <TextContainer>
            <Title>A Place for Learning</Title>
            <Text>asdasdasdasdasdasdasd sdg asfd g sd gfasd g sdag sd gd
            SDG ASAD AF SD ASD sd ds fh asfd gsad gh asfh sd g.
            </Text>
          </TextContainer>
        </Description>
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
