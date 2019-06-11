import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Hero from '../components/hero';
import MainEventHomepage from '../components/mainEventHomepage';
import Expectations from '../components/Expectations';
import UpcomingEvents from '../components/UpcomingEvents';
import PreviousEvents from '../components/PreviousEvents';
import HomepageFooter from '../components/HomepageFooter';

const IndexPage = () => (
  <React.Fragment>
    <Helmet>
      <title>Vulekamali Create</title>
      <meta name="twitter:card" content="summary" />
      <meta property="og:title" content="Insert Here" />
      <meta property="og:description" content="Insert Here" />
      <meta name="description" content="Insert Here" />
    </Helmet>
    <Header />
    <Hero title="Create with us!" home />
    <MainEventHomepage />
    <Expectations />
    <UpcomingEvents />
    <PreviousEvents />
    <HomepageFooter />
  </React.Fragment>
);

export default IndexPage;
