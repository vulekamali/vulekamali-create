import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

const Heading = styled(Typography)`
  && {
    text-transform: Uppercase;
    font-size: 12px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0.05em;
    color: #42526e;
    margin-bottom: 16px;

    @media screen and (min-width: 450px) {
      font-size: 14px;
      font-weight: 900;
    }
  }
`;

const Underline = styled.div`
  width: 45px;
  height: 4px;
  background-color: #243858;
  margin-bottom: 28px;
`;

const Description = styled.div`
  display: flex;
  margin-bottom: 28px;
`;

const TextContainer = styled.div`
  padding-left: 24px;
  width: 100%;
  max-width: 360px;
`;

const Title = styled(Typography)`
  && {
    font-weight: 700;
    font-size: 18px;
    line-height: 29px;
    color: #243858;

    @media screen and (min-width: 400px) {
      font-size: 24px;
      font-weight: 900;
    }
  }
`;

const Text = styled(Typography)`
  && {
    font-size: 14px;
    line-height: 22px;
    color: #42526E;

    @media screen and (min-width: 400px) {
      font-size: 16px;
    }
  }
`;

export {
  Wrapper,
  Heading,
  Underline,
  Description,
  TextContainer,
  Title,
  Text,
};

export default {
  Wrapper,
  Heading,
  Underline,
  Description,
  TextContainer,
  Title,
  Text,
};
