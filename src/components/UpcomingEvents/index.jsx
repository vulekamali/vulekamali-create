import React from 'react';
import SideEvent from '../SideEvent';
import northWestLiteracyCopy from '../../data/northWestLiteracy.json';
import northWestDQCopy from '../../data/northWestDQ.json';

import {
  Wrapper,
  Layout,
  Title,
  EventsWrapper,
  EventContainer,
} from './styled';

const UpcomingEvents = () => (
  <Wrapper id="upcoming-events">
    <Layout>
      <Title>Other Upcoming Events</Title>
      <EventsWrapper>
        <EventContainer>
          <SideEvent
            eventCopy={northWestLiteracyCopy}
            learnMore
          />
        </EventContainer>
        <EventContainer>
          <SideEvent
            eventCopy={northWestDQCopy}
            learnMore
          />
        </EventContainer>
      </EventsWrapper>
    </Layout>
  </Wrapper>
);

export default UpcomingEvents;
