import React from 'react';
import Helmet from 'react-helmet';
import Header from '../../components/header';
import Hero from '../../components/hero';
import Footer from '../../components/footer';
import MainEventEventpage from '../../components/mainEventEventpage';
import ProjectList from '../../components/projectList';
import MicroBlog from '../../components/microBlog';
import freeStateLiteracyCopy from '../../data/freeStateLiteracy.json';

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
      eventCopy={freeStateLiteracyCopy}
      criteriaUrl={null}
      getStartedUrl={null}
      signupUrl={null}
      />
    {/* <ProjectList eventTag="free state" /> */}
    <MicroBlog type="coming-soon" />
    <Footer />
  </React.Fragment>
);

export default EventPage;
