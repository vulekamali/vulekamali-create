import React from 'react';
import styled from 'styled-components';
import ContainerLayout from '../containerLayout';

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
`;

const List = styled.li`
  list-style: none;
  text-align: center;
  padding-right: 32px;
`;

const LeftItemsList = styled.li`
  list-style: none;
  text-align: center;
  padding-right: 32px;
`;

const RightItemsList = styled.li`
  list-style: none;
  text-align: center;
  padding-left: 32px;
`;

const LinkStyle = styled.a`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.8);
  text-transform: Uppercase;
  font-family: Lato;
  font-weight: 700;
  line-height: normal;
  font-size: 12px;

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

const Header = () => (
  <Wrapper>
    <ContainerLayout>
      <NavItemsContainer>
        <ListContainer>
          <LeftItemsList>
            <LinkStyle href="/">
              Vulekamali Create
            </LinkStyle>
          </LeftItemsList>
          <List>
            <LinkStyle href="https://vulekamali.gov.za/" target="_blank">
              Vulekamali
            </LinkStyle>
          </List>
        </ListContainer>
        <ListContainer>
          <List>
            <LinkStyle href="needs-anchor-tag">
              Upcoming Event
            </LinkStyle>
          </List>
          <RightItemsList>
            <LinkStyle href="needs-anchor-tag">
              Previous Events
            </LinkStyle>
          </RightItemsList>
        </ListContainer>
      </NavItemsContainer>
    </ContainerLayout>
  </Wrapper>
);

export default Header;
