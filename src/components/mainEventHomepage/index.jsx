import React from 'react';
import MainEvent from '../mainEvent';

import { Wrapper, Layout } from './styled';

const MainEventHomepage = ({ events, ...props }) => (
  <Wrapper>
    <Layout>
      {events.map(eventCopy =>
                  <MainEvent
                      eventCopy={eventCopy}
                      learnMore
                      home
                      />
                  )}
  </Layout>
    </Wrapper>
);

export default MainEventHomepage;
