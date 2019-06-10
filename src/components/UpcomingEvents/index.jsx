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
  <Wrapper>
    <Layout>
      <Title>Other Upcoming Events</Title>
      <EventsWrapper>
        <EventContainer>
          <SideEvent
            eventCopy={copy}
            learnMore
            signupUrl="https://s3-eu-west-1.amazonaws.com/manual-uploads.vulekamali.gov.za/events/Vulekamali+BetterBudgetSA+Dataquest+NC%2C+01+-+02+March.pdf"
          />
        </EventContainer>
        <EventContainer>
          <SideEvent
            eventCopy={copy}
            learnMore
            signupUrl="https://s3-eu-west-1.amazonaws.com/manual-uploads.vulekamali.gov.za/events/Vulekamali+BetterBudgetSA+Dataquest+NC%2C+01+-+02+March.pdf"
          />
        </EventContainer>
        <EventContainer>
          <SideEvent
            eventCopy={copy}
            learnMore
            signupUrl="https://s3-eu-west-1.amazonaws.com/manual-uploads.vulekamali.gov.za/events/Vulekamali+BetterBudgetSA+Dataquest+NC%2C+01+-+02+March.pdf"
          />
        </EventContainer>
      </EventsWrapper>
    </Layout>
  </Wrapper>
);

export default UpcomingEvents;
