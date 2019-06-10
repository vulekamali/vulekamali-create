import React from 'react';
import ContainerLayout from '../containerLayout';

import {
  Wrapper,
  Heading,
  Underline,
  Description,
  TextContainer,
  Title,
  Text,
  BulbIconStyled,
  LikeIconStyled,
} from './styled';

const Expectations = () => (
  <Wrapper>
    <ContainerLayout>
      <div>
        <Heading>What to expect:</Heading>
        <Underline />
        <Description>
          <BulbIconStyled />
          <TextContainer>
            <Title>Unleash your creativity</Title>
            <Text>asdasdasdasdasdasdasd sdg asfd g sd gfasd g sdag sd gd
            SDG ASAD AF SD ASD sd ds fh asfd gsad gh asfh sd g.
            </Text>
          </TextContainer>
        </Description>
        <Description>
          <LikeIconStyled />
          <TextContainer>
            <Title>Collaborate with others</Title>
            <Text>asdasdasdasdasdasdasd sdg asfd g sd gfasd g sdag sd gd
            SDG ASAD AF SD ASD sd ds fh asfd gsad gh asfh sd g.
            </Text>
          </TextContainer>
        </Description>
      </div>
    </ContainerLayout>
  </Wrapper>
);

export default Expectations;
