import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Hero from '../components/hero';
import MainEventHomepage from '../components/mainEventHomepage';
import Expectations from '../components/Expectations';
import PreviousEvents from '../components/PreviousEvents';
import HomepageFooter from '../components/HomepageFooter';
import * as events from '../data/events.json';

const stateReducer = function(state) {
  return function(filteredEvents, key) {
    if (events.default[key].state == state)
      return [...filteredEvents, events.default[key]];
    else
      return filteredEvents;
  };
};

const featuredEvents = Object.keys(events.default).reduce(stateReducer("featured"), []);
const pastEvents = Object.keys(events.default).reduce(stateReducer("past"), []);

const IndexPage = () => (
  <React.Fragment>
    <Helmet>
      <title>vulekamali Create</title>
      <meta name="twitter:card" content="summary" />
      <meta property="og:title" content="vulekamali Create" />
      <meta property="og:description" content="Unleash your creativity. See what you can do with government budget and spending data. Visualise it. Explore it. Explain it." />
      <meta name="description" content="Unleash your creativity. See what you can do with government budget and spending data. Visualise it. Explore it. Explain it." />
    </Helmet>
    <Header />
    <Hero title="Create with us!" home />
    <MainEventHomepage events={featuredEvents} />
    <Expectations />
    <PreviousEvents events={pastEvents} />
    <HomepageFooter />
  </React.Fragment>
);

export default IndexPage;
