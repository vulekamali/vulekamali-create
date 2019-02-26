import React from 'react';
import { Helmet } from 'gatsby-plugin-react-helmet';


const AppWrapper = ({ children }) => (
  <div>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900" rel="stylesheet"></link>
    </Helmet>
    {children}
  </div>

);

export default AppWrapper;
