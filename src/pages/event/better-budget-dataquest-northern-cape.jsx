import React from 'react';
import Helmet from 'react-helmet';
import Header from '../../components/header';
import Hero from '../../components/hero';
import Footer from '../../components/footer';
import MainEventEventpage from '../../components/mainEventEventpage';
import * as events from '../../data/events.json';
import ProjectList from '../../components/projectList';
import MicroBlog from '../../components/microBlog';

const [event] = events.default.filter(
  event => event.slug == "better-budget-dataquest-northern-cape"
);

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
      eventCopy={event}
      criteriaUrl="https://docs.google.com/document/d/1sVMD4OJHuOClKSVuA2Cj57vXR0AiaDtux5m7Re510tI/export?format=pdf"
      getStartedUrl="https://s3-eu-west-1.amazonaws.com/manual-uploads.vulekamali.gov.za/events/Vulekamali+BetterBudgetSA+Dataquest+NC%2C+01+-+02+March.pdf"
      signupUrl="https://s3-eu-west-1.amazonaws.com/manual-uploads.vulekamali.gov.za/events/Vulekamali+BetterBudgetSA+Dataquest+NC%2C+01+-+02+March.pdf"
    />
    <ProjectList eventTag="northern cape" />
    <MicroBlog embed="hardcoded" id="northern-cape" />
    <Footer />
  </React.Fragment>
);

export default EventPage;
