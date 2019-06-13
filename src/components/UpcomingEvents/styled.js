import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const Wrapper = styled.div`
  background: #8ECA62;
  display: flex;
  justify-content: center;
`;

const Layout = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 20px;
`;

const EventsWrapper = styled.div`

  @media screen and (min-width: 480px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const EventContainer = styled.div`
  margin-bottom: 40px;
`;

const Title = styled(Typography)`
  && {
    text-transform: Capitalise;
    font-weight: 900;
    font-size: 35px;
    line-height: 40px;
    color: #243858;
    padding-top: 90px;
    padding-bottom: 30px;
  }
`;

export {
  Wrapper,
  EventContainer,
  Title,
  EventsWrapper,
  Layout,
};

export default {
  Wrapper,
  EventContainer,
  Title,
  EventsWrapper,
  Layout,
};
