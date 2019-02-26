import React from 'react';
import styled from 'styled-components';
import {
  Typography, Card, CardContent, Button,
} from '@material-ui/core';
import ContainerLayout from '../containerLayout';
import imageHack from '../../images/background.jpg';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -100px;
`;

const CardContainer = styled(CardContent)`
  display: flex;
  flex-direction: column;
  padding: 0;
  height: 100%;

  @media screen and (min-width: 850px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
  }

  @media screen and (min-width: 1024px) {
    padding: 10px;
  }
`;

const TextContainer = styled.div`
  padding: 20px;
`;

const Date = styled(Typography)`
  font-family: Lato;
  color: #42526E;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.05em;
  padding-bottom: 8px;

  @media screen and (min-width: 650px) {
    font-size: 14px;
    font-weight: 900;
  }
`;

const Underline = styled.div`
  width: 45px;
  height: 4px;
  background-color: #243858;
  margin-bottom: 12px;
`;

const Title = styled(Typography)`
  font-family: Lato;
  color: #243858;
  font-size: 35px;
  font-weight: 700;
  line-height: 40px;
  padding-bottom: 8px;

  @media screen and (min-width: 850px) {
    font-size: 42px;
    font-weight: 900;
    line-height: 48px;
    letter-spacing: 0.01em;
    padding-bottom: 12px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 50px;
    line-height: 57px;
  }
`;

const Paragraph = styled(Typography)`
  font-family: Lato;
  color: #42526E;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding-bottom: 8px;

  @media screen and (min-width: 850px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.01em;
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  border-radius: 2px;
  height: 40px;
`;

const ButtonStyle = styled(Button)`
  min-width: 200px;
  height: 36px;
  color: #fff;
  font-family: Lato;
  font-size: 10px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.4em;
  margin-top: 12px;

  && {
    background-color: #AD3C64;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 135px;
  order: -1;

  @media screen and (min-width: 850px) {
    order: 1;
    height: auto;
    padding: 10px;
    display: flex;
    justify-content: center;
  }
`;

const ImageStyle = styled.div`
  background-image: url('${imageHack}');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 850px) {
    border-radius: 50%;
    height: 70%;
  }

  @media screen and (min-width: 1024px) {
    height: 80%;
    width: 85%;
  }
`;

const MainEventCard = () => (
  <Wrapper>
    <ContainerLayout>
      <Card>
        <CardContainer>
          <TextContainer>
            <Date>30 February 2019</Date>
            <Underline />
            <Title>Eastern Cape DataQuest</Title>
            <Paragraph>
              Join developers, students, enterpreneurs and data experts at a vulekamali
              hackathon. Build websites, mobile apps and other tools using the data and APIs
              behind vulekamali.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget libero
              odio. Vivamus fermentum ut purus vel feugiat. Integer fringilla leo at dolor scelerisque
              vestibulum. Morbi porttitor ligula non malesuada rhoncus. Ut sit amet mi nisl.
            </Paragraph>
            <Link href="https://create.vulekamali.gov.za/">
              <ButtonStyle>Add your project</ButtonStyle>
            </Link>
          </TextContainer>
          <ImageContainer>
            <ImageStyle />
          </ImageContainer>
        </CardContainer>
      </Card>
    </ContainerLayout>
  </Wrapper>
);

export default MainEventCard;
