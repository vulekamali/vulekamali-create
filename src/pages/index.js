import React from 'react';
import Header from '../components/header';
import NavigationsCopy from '../data/navigationApi.json';

const IndexPage = () => (
  <React.Fragment>
    <Header links={NavigationsCopy} />
  </React.Fragment>
);

export default IndexPage;
