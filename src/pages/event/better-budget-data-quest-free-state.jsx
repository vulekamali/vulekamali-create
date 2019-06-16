import React from 'react';
import Helmet from 'react-helmet';
import Header from '../../components/header';
import Hero from '../../components/hero';
import Footer from '../../components/footer';
import MainEventEventpage from '../../components/mainEventEventpage';
import MicroBlog from '../../components/microBlog';
import * as events from '../../data/events.json';
import ProjectList from '../../components/projectList';

const event = events["better-budget-data-quest-free-state"];

const EventPage = () => (
  <React.Fragment>
    <Helmet>
      <title>Better Budget Dataquest Free State</title>
      <meta name="twitter:card" content="summary" />
      <meta property="og:title" content="Better Budget Dataquest Free State" />
      <meta property="og:description" content="Explore, visualise and explain a story you find in the national and provincial budget and spending data." />
      <meta name="description" content="Explore, visualise and explain a story you find in the national and provincial budget and spending data." />
    </Helmet>
    <Header />
    <Hero title="Event" />
    <MainEventEventpage
      eventCopy={event}
      criteriaUrl={null}
      getStartedUrl={null}
      signupUrl={null}
    />
    <ProjectList eventTag="free state" />
    <MicroBlog embed="coming-soon" />
    <Footer />
  </React.Fragment>
);

export default EventPage;
