import React from 'react';

import ContainerLayout from '../containerLayout';

import {
  Wrapper,
  NavItemsContainer,
  ListContainer,
  LeftItemsList,
  LinkStyle,
  ScrollLinkStyled,
  List,
  RightItemsList,
} from './styled';

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
            <ScrollLinkStyled to="upcoming-events" smooth duration={500}>
              Upcoming Event
            </ScrollLinkStyled>
          </List>
          <RightItemsList>
            <ScrollLinkStyled to="previous-events" smooth duration={500}>
              Previous Events
            </ScrollLinkStyled>
          </RightItemsList>
        </ListContainer>
      </NavItemsContainer>
    </ContainerLayout>
  </Wrapper>
);

export default Header;
