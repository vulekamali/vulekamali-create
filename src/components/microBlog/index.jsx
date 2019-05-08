import React from 'react';
import styled from 'styled-components';
import ContainerLayout from '../containerLayout';
import GlobalStyle from './GlobalStyle';
import hardCodedHtml from './hardCodedHtml';
import { Typography } from '@material-ui/core';

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
      <div dangerouslySetInnerHTML={{ __html: hardCodedHtml }} />
    </ContainerLayout>
  </Wrapper>
);

export default MicroBlog;
