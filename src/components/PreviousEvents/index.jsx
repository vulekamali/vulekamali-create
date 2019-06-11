import React from 'react';
import SideEvent from '../SideEvent';
import copy from '../../data/placeholderSideEvent.json';

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
            eventCopy={copy}
            learnMore
          />
        </EventContainer>
        <EventContainer>
          <SideEvent
            eventCopy={copy}
            learnMore
          />
        </EventContainer>
        <EventContainer>
          <SideEvent
            eventCopy={copy}
            learnMore
          />
        </EventContainer>
        <EventContainer>
          <SideEvent
            eventCopy={copy}
            learnMore
          />
        </EventContainer>
      </EventsWrapper>
    </Layout>
  </Wrapper>
);

export default UpcomingEvents;
