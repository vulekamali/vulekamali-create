import React, { Component } from 'react';
import { Card } from '@material-ui/core';

import ContainerLayout from '../containerLayout';

import {
  Wrapper,
  Heading,
  ButtonContainer,
  AddButton,
  AddIconStyled,
  ProjectsContainer,
  ProjectWrapper,
  ProjectContent,
  ImageContainer,
  ImageStyle,
  TextContainer,
  Contributor,
  Underline,
  Title,
  Paragraph,
  Link,
  ButtonStyle,
} from './styled';
class ProjectList extends Component {
  state = {
    projects: [],
    loading: true
  }

  componentDidMount() {
    this.fetchProjectList();
    this.setState({loading: false})
  }

  fetchProjectList = () => {
    fetch('https://hackdash.org/api/v2/vulekamali/projects')
      .then(response => response.json())
      .then(projects => (
        this.setState({ projects })
      )
    );
  }

  callProjectLists = projects => projects.filter(({ tags }) => !!tags.find(region => region.toLowerCase() === 'northern cape')).map(({
    contributors,
    title,
    description,
    cover,
    _id: id
  }) => (
    <ProjectWrapper key={id}>
      <Card>
        <ProjectContent>
          <ImageContainer>
            <ImageStyle {...{ cover }} />
          </ImageContainer>
          <TextContainer>
            <Contributor>{contributors.length} Contributor</Contributor>
            <Underline />
            <Title>{title}</Title>
            <Paragraph>{description.length > 70 ? `${description.substring(0, 70)}...` : description  }</Paragraph>
            <Link href={`https://hackdash.org/projects/${id}`} target="_blank">
              <ButtonStyle>Learn More</ButtonStyle>
            </Link>
          </TextContainer>
        </ProjectContent>
      </Card>
    </ProjectWrapper>
  ));

  render() {
    const { projects } = this.state;
    return (
      <Wrapper>
        <ContainerLayout>
          <ButtonContainer>
            <Heading>Projects</Heading>
            <Link href="https://hackdash.org/dashboards/vulekamali" target="_blank">
              <AddButton aria-label="Add">
                <AddIconStyled />
              </AddButton>
            </Link>
          </ButtonContainer>
          <ProjectsContainer>
            {this.callProjectLists(projects)}
          </ProjectsContainer>
        </ContainerLayout>
      </Wrapper>
    )
  }
}

export default ProjectList;
