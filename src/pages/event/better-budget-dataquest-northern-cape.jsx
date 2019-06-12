import React from 'react';
import Helmet from 'react-helmet';
import Header from '../../components/header';
import Hero from '../../components/hero';
import Footer from '../../components/footer';
import MainEventEventpage from '../../components/mainEventEventpage';
import ProjectList from '../../components/projectList';
import MicroBlog from '../../components/microBlog';

import northernCapeCopy from '../../data/northernCape.json';

const EventPage = () => (
  <React.Fragment>
    <Helmet>
      <title>Better Budget Dataquest Northern Cape</title>
      <meta name="twitter:card" content="summary" />
      <meta property="og:title" content="Better Budget Dataquest Northern Cape" />
      <meta property="og:description" content="Explore the spending data, and come up with findings or indications under one category of gender, inequality or the environment. Contextualize the spending with other data available to you." />
      <meta name="description" content="Explore the spending data, and come up with findings or indications under one category of gender, inequality or the environment. Contextualize the spending with other data available to you." />
    </Helmet>
    <Header />
    <Hero title="Event" />
    <MainEventEventpage
      eventCopy={northernCapeCopy}
      />
    <ProjectList eventTag="northern cape" />
    <MicroBlog type="hardcoded" id="northern-cape" />
    <Footer />
  </React.Fragment>
);

export default EventPage;
