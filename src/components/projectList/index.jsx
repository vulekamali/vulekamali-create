import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Typography,
  Card,
  CardContent,
  Button
} from '@material-ui/core';
import ContainerLayout from '../containerLayout';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 58px;
`;

const Heading = styled(Typography)`
  font-family: Lato;
  font-style: normal;
  font-weight: 900;
  line-height: 40px;
  font-size: 25px;
  letter-spacing: 0.01em;
  color: #243858;
  margin-bottom: 20px;

  @media screen and (min-width: 650px) {
    font-size: 35px;
  }
`;

const ProjectsContainer = styled.div`
  
  @media screen and (min-width: 700px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const ProjectWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;

  @media screen and (min-width: 700px) {
    max-width: 50%;
    
    &:nth-of-type(odd) {
      padding-right: 20px;
    }
  } 
`;

const ProjectContent = styled(CardContent)`
  padding: 0;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 220px;
`;

const ImageStyle = styled.div`
  background-image: ${({ cover }) => (cover ? `url('${cover}')` : 'none')};
  background-color: rgba(0, 0, 0, 0.12);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  padding: 20px;
`;

const Contributor = styled(Typography)`
  font-family: Lato;
  color: #42526E;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.05em;
  text-transform: Uppercase;
  padding-bottom: 8px;

  @media screen and (min-width: 650px) {
    font-size: 14px;
    font-weight: 900;
  }
`;

const Underline = styled.div`
  width: 45px;
  height: 4px;
  background-color: #243858;
  margin-bottom: 12px;
`;

const Title = styled(Typography)`
  font-family: Lato;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 24px;
  letter-spacing: -0.01em;
  padding-bottom: 14px;
`;

const Paragraph = styled(Typography)`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  line-height: 28px;
  font-size: 20px;
  letter-spacing: -0.01em;
  color: #42526E;
  padding-bottom: 8px;
`;

const Link = styled.a`
  text-decoration: none;
  border-radius: 2px;
`;

const ButtonStyle = styled(Button)`
  min-width: 135px;
  height: 36px;
  color: rgba(36, 56, 88, 0.7);
  font-family: Lato;
  font-weight: 400;
  line-height: normal;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0.0357143em;
  text-transform: uppercase;
  margin-top: 12px;
  margin-right: 8px;

  && {
    background-color: rgba(0, 0, 0, 0.12);
  }
`;

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

  callProjectLists = projects => projects.map(({
    contributors,
    title,
    description,
    cover,
    _id: id
  }) => {
    return (
      <ProjectWrapper key={id}>
        <Card>
          <ProjectContent>
            <ImageContainer>
              <ImageStyle {...{ cover }} />
              {console.log(cover)}
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
    );
});

  render() {
    const { projects, loading } = this.state;
    return (
      <Wrapper>
        <ContainerLayout>
          <Heading>Projects</Heading>
          <ProjectsContainer>
            {this.callProjectLists(projects)}
            {console.log(loading)}
            {console.log(projects)}
          </ProjectsContainer>
        </ContainerLayout>
      </Wrapper>
    )
  }
}

export default ProjectList;
