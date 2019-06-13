import React from 'react';

import ContainerLayout from '../containerLayout';

import {
  Wrapper,
  NavItemsContainer,
  ListContainer,
  ListContainerRight,
  LeftItemsList,
  LinkStyle,
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
        <ListContainerRight>
          <RightItemsList>
            <LinkStyle href="/#previous-events">
              Previous Events
            </LinkStyle>
          </RightItemsList>
        </ListContainerRight>
      </NavItemsContainer>
    </ContainerLayout>
  </Wrapper>
);

export default Header;
