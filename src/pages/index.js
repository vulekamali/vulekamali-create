import React from 'react';
import Header from '../components/header';
import NavigationsCopy from '../data/navigationApi.json';
import Hero from '../components/hero';

const IndexPage = () => (
  <React.Fragment>
    <Header links={NavigationsCopy} />
    <Hero />
  </React.Fragment>
);

export default IndexPage;
