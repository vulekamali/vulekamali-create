import React from 'react';
import Header from '../components/header';
import NavigationsCopy from '../data/navigationApi.json';
import Hero from '../components/hero';
import Footer from '../components/footer';
import MainEventCard from '../components/mainEvent';

const IndexPage = () => (
  <React.Fragment>
    <Header links={NavigationsCopy} />
    <Hero />
    <MainEventCard />
    <Footer />
  </React.Fragment>
);

export default IndexPage;
