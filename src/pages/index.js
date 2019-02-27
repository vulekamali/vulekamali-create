import React from 'react';
import Header from '../components/header';
import Hero from '../components/hero';
import Footer from '../components/footer';
import MainEventCard from '../components/mainEvent';

const IndexPage = () => (
  <React.Fragment>
    <Header />
    <Hero />
    <MainEventCard />
    <Footer />
  </React.Fragment>
);

export default IndexPage;
