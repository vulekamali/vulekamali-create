import React from 'react';
import SideEvent from '../SideEvent';

import {
  Wrapper,
  Layout,
  Title,
  EventsWrapper,
  EventContainer,
} from './styled';

const PreviousEvents = ({ events, ...props }) => (
  <Wrapper id="previous-events">
    <Layout>
      <Title>Previous Events</Title>
      <EventsWrapper>
        <EventContainer>
          {events.map(eventCopy =>
                      <SideEvent
                          eventCopy={eventCopy}
                          learnMore
                          />
                     )}
  </EventContainer>
    </EventsWrapper>
    </Layout>
    </Wrapper>
);

export default PreviousEvents;
