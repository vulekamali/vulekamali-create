import React from 'react';
import { Link } from 'gatsby';
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

const ListContainer = styled.ul`
  max-width: 280px;
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

const List = styled.li`
  list-style: none;
  text-align: center;
`;

const LinkStyle = styled(Link)`
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

const Header = ({ links }) => (
  <Wrapper>
    <ContainerLayout>
      <ListContainer>
        {links.map(({ item, link }) => (
          <List>
            <LinkStyle key={item} to={link}>
              {item}
            </LinkStyle>
          </List>
        ))}
      </ListContainer>
    </ContainerLayout>
  </Wrapper>
);

export default Header;
