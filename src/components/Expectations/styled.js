import styled from 'styled-components';
import { Typography } from '@material-ui/core';

import BulbIcon from '../../images/bulb';
import LikeIcon from '../../images/like';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

const Heading = styled(Typography)`
  && {
    text-transform: Uppercase;
    font-size: 14px;
    font-weight: 900;
    line-height: 17px;
    letter-spacing: 0.05em;
    color: #42526e;
    margin-bottom: 16px;
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
    font-weight: 900;
    font-size: 24px;
    line-height: 29px;
    color: #243858;
  }
`;

const Text = styled(Typography)`
  && {
    font-size: 16px;
    line-height: 22px;
    color: #42526E;
  }
`;

const BulbIconStyled = styled(BulbIcon)`
  && {
    width: 40px;
    height: 40px;
  }
`;

const LikeIconStyled = styled(LikeIcon)`
  && {
    width: 400px;
    height: 40px;
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
  BulbIconStyled,
  LikeIconStyled,
};

export default {
  Wrapper,
  Heading,
  Underline,
  Description,
  TextContainer,
  Title,
  Text,
  BulbIconStyled,
  LikeIconStyled,
};
