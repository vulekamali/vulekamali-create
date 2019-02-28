import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import ContainerLayout from '../containerLayout';
import GlobalStyle from './GlobalStyle';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-family: Lato;
  color: black;
  margin-top: 40px;

  @media screen and (min-width: 650px) {
    margin-top: 58px;
  }
`;

const MicroBlogEmbed = styled.div`
  margin: 0 auto;
`;

const Title = styled(Typography)`
  font-family: Lato;
  font-style: normal;
  font-weight: 900;
  line-height: 40px;
  font-size: 25px;
  letter-spacing: 0.01em;
  color: #243858;

  @media screen and (min-width: 650px) {
    font-size: 35px;
  }
`;

const MicroBlog = () => (
  <Wrapper>
    <GlobalStyle />
    <ContainerLayout>
      <Title>Timeline</Title>
      <MicroBlogEmbed id="LB24_LIVE_CONTENT" data-eid="2200802748257424172" />
    </ContainerLayout>
  </Wrapper>
);

export default MicroBlog;
