import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import ContainerLayout from '../containerLayout';

const Wrapper = styled.div`
  width: 100%;
  height: 68px;
  background-color: #21292E;
  display: flex;
`;

const ListContainer = styled.ul`
  width: 280px;
  display: flex;
  justify-content: space-between;
`;

const List = styled.li`
  list-style: none;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: #fff;
  text-transform: Uppercase;
  
`;


const Header = () => (
  <Wrapper>
    <ContainerLayout>
      <ListContainer>
        <List>
          <LinkStyle to="https://www.scrumguides.org/docs/scrumguide/v2017/2017-Scrum-Guide-US.pdf#zoom=100">
            Vulekamali Create
          </LinkStyle>
        </List>
        <List>
          <LinkStyle to="https://www.scrumguides.org/docs/scrumguide/v2017/2017-Scrum-Guide-US.pdf#zoom=100">
            Vulekamali
          </LinkStyle>
        </List>
      </ListContainer>
    </ContainerLayout>
  </Wrapper>
);

export default Header;
