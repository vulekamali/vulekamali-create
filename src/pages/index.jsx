import React from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import MainEventHomepage from '../components/mainEventHomepage';

const IndexPage = () => (
  <React.Fragment>
    <Header />
    <Hero title="Create with us!" home />
    <MainEventHomepage />
  </React.Fragment>
);

export default IndexPage;
