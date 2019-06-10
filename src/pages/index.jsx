import React from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import MainEventHomepage from '../components/mainEventHomepage';
import Expectations from '../components/Expectations';
import UpcomingEvents from '../components/UpcomingEvents';
import PreviousEvents from '../components/PreviousEvents';

const IndexPage = () => (
  <React.Fragment>
    <Header />
    <Hero title="Create with us!" home />
    <MainEventHomepage />
    <Expectations />
    <UpcomingEvents />
    <PreviousEvents />
  </React.Fragment>
);

export default IndexPage;
