import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Typography,
  Card,
  CardContent,
  Button,
  Fab
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
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

  @media screen and (min-width: 650px) {
    font-size: 35px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const AddButton = styled(Fab)`
  background-color: #AD3C64
`;

const AddIconStyled = styled(AddIcon)`
  color: #fff;
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
  background-image: ${({ cover }) => (cover ? `url('${cover}')` : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`)};
  background-color: rgba(0, 0, 0, 0.12);
  background-size: ${({ cover }) => (cover ? `cover` : `none`)};
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
