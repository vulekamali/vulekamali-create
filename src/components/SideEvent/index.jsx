import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import { Card } from '@material-ui/core';

import {
  Wrapper,
  CardContainer,
  Description,
  DateGroup,
  DateIconStyled,
  Date,
  Underline,
  Title,
  LocationItems,
  LocationIconStyled,
  Location,
  DescriptionContainer,
  ButtonsGroup,
  Link,
  ButtonStyle,
  ActionPackButton,
} from './styled';

const callDescription = description => (
  <DescriptionContainer component="div">
    <ReactMarkdown source={description} />
  </DescriptionContainer>
);

const callLearnMoreButton = (slug, learnMore) => {
  if (!learnMore) {
    return null;
  }
  return (
    <Link href={`/event/${slug}`} target="_blank">
      <ButtonStyle>Learn More</ButtonStyle>
    </Link>
  );
};

const callSignUpButton = (signupUrl) => {
  if (!signupUrl) {
    return null;
  }
  return (
    <Link href={signupUrl} target="_blank">
      <ActionPackButton variant="contained">Sign Up</ActionPackButton>
    </Link>
  );
};


const MainEventCard = (props) => {
  const {
    eventCopy,
    learnMore,
    signupUrl,
  } = props;
  const {
    date,
    title,
    location,
    description,
    slug,
  } = eventCopy;

  return (
    <Wrapper>
      <Card>
        <CardContainer>
          <Description>
            <DateGroup>
              <DateIconStyled />
              <Date>{date}</Date>
            </DateGroup>
            <Underline />
            <Title>{title}</Title>
            <LocationItems>
              <LocationIconStyled />
              <Location>{location}</Location>
            </LocationItems>
            {callDescription(description)}
          </Description>
          <ButtonsGroup>
            {callLearnMoreButton(slug, learnMore)}
            {callSignUpButton(signupUrl)}
          </ButtonsGroup>
        </CardContainer>
      </Card>
    </Wrapper>
  );
};

export default MainEventCard;

MainEventCard.propTypes = {
  eventCopy: PropTypes.shape({
    date: PropTypes.string,
    title: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    slug: PropTypes.string,
  }).isRequired,
  learnMore: PropTypes.bool,
  signupUrl: PropTypes.string,
};

MainEventCard.defaultProps = {
  learnMore: false,
  signupUrl: null,
};
