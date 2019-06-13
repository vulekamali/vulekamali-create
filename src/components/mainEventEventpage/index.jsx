import React from 'react';
import MainEvent from '../mainEvent';
// import copy from '../../data/northernCape.json';

import { Wrapper, Layout } from './styled';

const mainEventEventpage = ({ eventCopy, criteriaUrl, getStartedUrl, signupUrl }) => (
  <Wrapper>
    <Layout>
      <MainEvent
        {...{ eventCopy, criteriaUrl, getStartedUrl, signupUrl }}
        addProjectUrl="https://hackdash.org/dashboards/vulekamali"
        containsImage
      />
    </Layout>
  </Wrapper>
);

export default mainEventEventpage;