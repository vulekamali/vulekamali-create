import styled from 'styled-components';
import { Typography, Card } from '@material-ui/core';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  font-family: Lato, sans-serif;
  color: black;
  margin-top: 40px;

  @media screen and (min-width: 650px) {
    margin-top: 58px;
  }
`;

const Title = styled(Typography)`
  font-family: Lato, sans-serif;
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

const MicroBlogEmbed = styled.div`
  margin: 0 auto;
`;

const ComingSoonContainer = styled(Card)`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const ComingSoonText = styled(Typography)`
  && {
    font-family: Lato, sans-serif;
    font-style: normal;
    font-weight: 900;
    line-height: 40px;
    font-size: 25px;
    letter-spacing: 0.01em;
    color: #243858;

    @media screen and (min-width: 650px) {
      font-size: 35px;
    }
  }
`;


export {
  Wrapper,
  Title,
  MicroBlogEmbed,
  ComingSoonContainer,
  ComingSoonText,
};

export default {
  Wrapper,
  Title,
  MicroBlogEmbed,
  ComingSoonContainer,
  ComingSoonText,
};
