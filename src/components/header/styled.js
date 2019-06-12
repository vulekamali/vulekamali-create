import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

const Wrapper = styled.div`
  width: 100%;
  height: 68px;
  background-color: #21292E;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavItemsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 160px;

  @media screen and (min-width: 650px) {
    width: 280px;
  }
`;

const List = styled.li`
  width: 50%;
  list-style: none;
  text-align: center;

  @media screen and (min-width: 650px) {
    width: auto;
  }
`;

const LeftItemsList = styled.li`
  list-style: none;
  text-align: center;
`;

const RightItemsList = styled.li`
  list-style: none;
  text-align: center;
`;

const LinkStyle = styled.a`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  text-transform: Uppercase;
  font-family: Lato;
  font-weight: 700;
  line-height: normal;
  font-size: 10px;

  &:hover {
    color: #fff;
  }

  &:focus {
    color: #8ECA62;
    font-weight: 400;
  }

  @media screen and (min-width: 450px) {
    font-weight: 900;
    font-size: 14px;
  }
`;

export {
  Wrapper,
  NavItemsContainer,
  ListContainer,
  LeftItemsList,
  LinkStyle,
  List,
  RightItemsList,
};

export default {
  Wrapper,
  NavItemsContainer,
  ListContainer,
  LeftItemsList,
  LinkStyle,
  List,
  RightItemsList,
};
