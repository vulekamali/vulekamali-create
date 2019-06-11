import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import { Card } from '@material-ui/core';

import {
  Wrapper,
  CardContainer,
  TextContainer,
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
  ImageContainer,
  ImageStyle,
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

const callProjectButton = (addProjectUrl) => {
  if (!addProjectUrl) {
    return null;
  }
  return (
    <Link href={addProjectUrl} target="_blank">
      <ButtonStyle>Add Your Project</ButtonStyle>
    </Link>
  );
};

const callCriteriaButton = (criteriaUrl) => {
  if (!criteriaUrl) {
    return null;
  }
  return (
    <Link href={criteriaUrl} target="_blank">
      <ButtonStyle>Judging Criteria</ButtonStyle>
    </Link>
  );
};

const callGetStartedButton = (getStartedUrl) => {
  if (!getStartedUrl) {
    return null;
  }
  return (
    <Link href={getStartedUrl} target="_blank">
      <ActionPackButton variant="contained">Get Started</ActionPackButton>
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

const callImage = (containsImage) => {
  if (!containsImage) {
    return null;
  }
  return (
    <ImageContainer>
      <ImageStyle />
    </ImageContainer>
  );
};

const MainEventCard = (props) => {
  const {
    eventCopy,
    learnMore,
    addProjectUrl,
    criteriaUrl,
    getStartedUrl,
    signupUrl,
    containsImage,
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
          <TextContainer>
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
            {callImage(containsImage)}
          </TextContainer>
          <ButtonsGroup>
            {callLearnMoreButton(slug, learnMore)}
            {callProjectButton(addProjectUrl)}
            {callCriteriaButton(criteriaUrl)}
            {callGetStartedButton(getStartedUrl)}
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
    description: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
      }),
    ),
    slug: PropTypes.string,
  }).isRequired,
  learnMore: PropTypes.bool,
  addProjectUrl: PropTypes.string,
  criteriaUrl: PropTypes.string,
  getStartedUrl: PropTypes.string,
  signupUrl: PropTypes.string,
  containsImage: PropTypes.bool,
};

MainEventCard.defaultProps = {
  learnMore: false,
  addProjectUrl: null,
  criteriaUrl: null,
  getStartedUrl: null,
  signupUrl: null,
  containsImage: false,
};
