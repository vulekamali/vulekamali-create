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
            signupUrl="https://s3-eu-west-1.amazonaws.com/manual-uploads.vulekamali.gov.za/events/Vulekamali+BetterBudgetSA+Dataquest+NC%2C+01+-+02+March.pdf"
          />
        </EventContainer>
        <EventContainer>
          <SideEvent
            eventCopy={northWestDQCopy}
            learnMore
            signupUrl="https://s3-eu-west-1.amazonaws.com/manual-uploads.vulekamali.gov.za/events/Vulekamali+BetterBudgetSA+Dataquest+NC%2C+01+-+02+March.pdf"
          />
        </EventContainer>
      </EventsWrapper>
    </Layout>
  </Wrapper>
);

export default UpcomingEvents;
