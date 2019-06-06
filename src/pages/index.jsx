import React from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import MainEventCard from '../components/mainEvent';
import copy from '../data/northernCape.json';

const IndexPage = () => (
  <React.Fragment>
    <Header />
    <Hero title="Create with us!" />
    <MainEventCard
      eventCopy={copy}
      learnMore
      signupUrl="https://s3-eu-west-1.amazonaws.com/manual-uploads.vulekamali.gov.za/events/Vulekamali+BetterBudgetSA+Dataquest+NC%2C+01+-+02+March.pdf"
    />
  </React.Fragment>
);

export default IndexPage;
