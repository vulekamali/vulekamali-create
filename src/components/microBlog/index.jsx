import React from 'react';
import styled from 'styled-components';
import ContainerLayout from '../containerLayout';
import GlobalStyle from './GlobalStyle';
import hardCodedHtml from './hardCodedHtml';

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

const MicroBlog = () => (
  <Wrapper>
    <GlobalStyle />
    <ContainerLayout>
      <div dangerouslySetInnerHTML={{ __html: hardCodedHtml }} />
    </ContainerLayout>
  </Wrapper>
);

export default MicroBlog;
