import styled from 'styled-components';

import {
  Typography,
  CardContent,
  Button,
  Fab,
} from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import backgroundPattern from '../../images/floating-cogs.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 58px;
`;

const Heading = styled(Typography)`
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const AddButton = styled(Fab)`
  background-color: #AD3C64
`;

const AddIconStyled = styled(AddIcon)`
  color: #fff;
`;

const ProjectsContainer = styled.div`
  
  @media screen and (min-width: 700px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const ProjectWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;

  @media screen and (min-width: 700px) {
    max-width: 50%;
    
    &:nth-of-type(odd) {
      padding-right: 20px;
    }
  } 
`;

const ProjectContent = styled(CardContent)`
  padding: 0;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 220px;
  background-color: rgba(0, 0, 0, 0.12);
`;

const ImageStyle = styled.div`
  background-image: ${({ cover }) => (cover ? `url('${cover}')` : `url('${backgroundPattern}')` )};
  background-size: ${({ cover }) => (cover ? `cover` : `none`)};
  opacity: ${({ cover }) => (cover ? `1` : `0.2`)};
  background-position: center;
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  padding: 20px;
`;

const Contributor = styled(Typography)`
  font-family: Lato;
  color: #42526E;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.05em;
  text-transform: Uppercase;
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
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 24px;
  letter-spacing: -0.01em;
  padding-bottom: 14px;
`;

const Paragraph = styled(Typography)`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  line-height: 28px;
  font-size: 20px;
  letter-spacing: -0.01em;
  color: #42526E;
  padding-bottom: 8px;
`;

const Link = styled.a`
  text-decoration: none;
  border-radius: 2px;
`;

const ButtonStyle = styled(Button)`
  min-width: 135px;
  height: 36px;
  color: rgba(36, 56, 88, 0.7);
  font-family: Lato;
  font-weight: 400;
  line-height: normal;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0.0357143em;
  text-transform: uppercase;
  margin-top: 12px;
  margin-right: 8px;

  && {
    background-color: rgba(0, 0, 0, 0.12);
  }
`;

export {
  Wrapper,
  Heading,
  ButtonContainer,
  AddButton,
  AddIconStyled,
  ProjectsContainer,
  ProjectWrapper,
  ProjectContent,
  ImageContainer,
  ImageStyle,
  TextContainer,
  Contributor,
  Underline,
  Title,
  Paragraph,
  Link,
  ButtonStyle,
};

export default {
  Wrapper,
  Heading,
  ButtonContainer,
  AddButton,
  AddIconStyled,
  ProjectsContainer,
  ProjectWrapper,
  ProjectContent,
  ImageContainer,
  ImageStyle,
  TextContainer,
  Contributor,
  Underline,
  Title,
  Paragraph,
  Link,
  ButtonStyle,
};
