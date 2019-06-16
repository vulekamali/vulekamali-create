import React from 'react';
import Helmet from 'react-helmet';
import Header from '../../components/header';
import Hero from '../../components/hero';
import Footer from '../../components/footer';
import MainEventEventpage from '../../components/mainEventEventpage';
import * as events from '../../data/events.json';
import MicroBlog from '../../components/microBlog';

const event = events["budget-literacy-training-free-state"];

const EventPage = () => (
  <React.Fragment>
    <Helmet>
      <title>Budget Literacy Training Free State</title>
      <meta name="twitter:card" content="summary" />
      <meta property="og:title" content="Budget Literacy Training Free State" />
      <meta property="og:description" content="National Treasury in partnership with Civil Society organisations, Imali Yethu are facilitating a 2-day training course on Government Budgets, from government income to  its expenditure." />
      <meta name="description" content="National Treasury in partnership with Civil Society organisations, Imali Yethu are facilitating a 2-day training course on Government Budgets, from government income to  its expenditure." />
    </Helmet>
    <Header />
    <Hero title="Event" />
    <MainEventEventpage
      eventCopy={event}
      criteriaUrl={null}
      getStartedUrl={null}
      signupUrl={null}
    />
    <MicroBlog embed="coming-soon" />
    <Footer />
  </React.Fragment>
);

export default EventPage;
