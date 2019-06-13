import React from 'react';
import MainEvent from '../mainEvent';

import freeStateLiteracyCopy from '../../data/freeStateLiteracyHome.json';
import freeStateDQcopy from '../../data/freeStateDQHome.json';

import { Wrapper, Layout } from './styled';

const MainEventHomepage = () => (
  <Wrapper>
    <Layout>
      <MainEvent
        eventCopy={freeStateLiteracyCopy}
        learnMore
      />
      <MainEvent
        secondCard
        eventCopy={freeStateDQcopy}
        learnMore
      />
    </Layout>
  </Wrapper>
);

export default MainEventHomepage;
