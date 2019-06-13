import React from 'react';
import SideEvent from '../SideEvent';
import northernCapeCopy from '../../data/northernCapeHome.json';

import {
  Wrapper,
  Layout,
  Title,
  EventsWrapper,
  EventContainer,
} from './styled';

const UpcomingEvents = () => (
  <Wrapper id="previous-events">
    <Layout>
      <Title>Previous Events</Title>
      <EventsWrapper>
        <EventContainer>
          <SideEvent
            eventCopy={northernCapeCopy}
            learnMore
          />
        </EventContainer>
      </EventsWrapper>
    </Layout>
  </Wrapper>
);

export default UpcomingEvents;
