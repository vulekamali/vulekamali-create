import React from 'react';
import ContainerLayout from '../containerLayout';

import {
  Wrapper,
  NavItemsContainer,
  ListContainer,
  LeftItemsList,
  LinkStyle,
  List,
  RightItemsList
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
