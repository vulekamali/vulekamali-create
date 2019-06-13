import React from 'react';
import MainEvent from '../mainEvent';

import events from '../../data/events.json';

import { Wrapper, Layout } from './styled';

const eventCards = events.featured.map(eventCopy =>
  <MainEvent
    eventCopy={eventCopy}
    learnMore
    home
  />
);

const MainEventHomepage = () => (
  <Wrapper>
    <Layout>
      {eventCards}
    </Layout>
  </Wrapper>
);

export default MainEventHomepage;
