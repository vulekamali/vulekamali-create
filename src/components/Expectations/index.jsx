import React from 'react';
import ContainerLayout from '../containerLayout';

import BulbIcon from '../../images/bulb';
import LikeIcon from '../../images/like';

import {
  Wrapper,
  Heading,
  Underline,
  Description,
  TextContainer,
  Title,
  Text,
} from './styled';

const Expectations = () => (
  <Wrapper>
    <ContainerLayout>
      <div>
        <Heading>What to expect:</Heading>
        <Underline />
        <Description>
          <BulbIcon />
          <TextContainer>
            <Title>Unleash your creativity</Title>
            <Text>See what you can do with government budget and spending data. Visualise it. Explore it. Explain it.
            </Text>
          </TextContainer>
        </Description>
        <Description>
          <LikeIcon />
          <TextContainer>
            <Title>Collaborate with others</Title>
            <Text>Find others working on related problems. Share ideas and build on each others' progress.
            </Text>
          </TextContainer>
        </Description>
      </div>
    </ContainerLayout>
  </Wrapper>
);

export default Expectations;
