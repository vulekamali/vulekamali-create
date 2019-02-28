import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Typography } from '@material-ui/core';
import ContainerLayout from '../containerLayout';

const Wrapper = styled.div`
  width: 100%;
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

const GlobalStyle = createGlobalStyle`
  .lb24-default-list-item-title {
    color: #243858 !important;
    font-size: 12px !important;
    font-family: Lato;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: 0.01071em;
  }

  @media screen and (min-width: 650px) {
    .lb24-default-list-item-title {
      font-size: 14px !important;
    }
  }

  .lb24-default-list-item {
    min-width: 275px;
    overflow: hidden;
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
    background-color: #fff;
    border-radius: 4px;
    margin-bottom: 14px !important;
  }

  .lb24-default-list-item-date {
    color: #8091a5 !important;
    font-size: 12px !important;
    font-family: Lato;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.01071em;
  }

  @media screen and (min-width: 650px) {
    .lb24-default-list-item-date {
      font-size: 14px !important;
    }
  }

  .lb24-component-content {
    font-size: 14px !important;
    font-family: Lato;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.01071em;
    color: #42526 !important;
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
