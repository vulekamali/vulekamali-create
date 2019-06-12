import React from 'react';
import MainEvent from '../mainEvent';

import freeStateLiteracyCopy from '../../data/freeStateLiteracy.json';
import freeStateDQcopy from '../../data/freeStateDQ.json';

import { Wrapper, Layout } from './styled';

const MainEventHomepage = () => (
  <Wrapper>
    <Layout>
      <MainEvent
        eventCopy={freeStateLiteracyCopy}
        learnMore
        signupUrl="https://s3-eu-west-1.amazonaws.com/manual-uploads.vulekamali.gov.za/events/Vulekamali+BetterBudgetSA+Dataquest+NC%2C+01+-+02+March.pdf"
      />
      <MainEvent
        secondCard
        eventCopy={freeStateDQcopy}
        learnMore
        signupUrl="https://s3-eu-west-1.amazonaws.com/manual-uploads.vulekamali.gov.za/events/Vulekamali+BetterBudgetSA+Dataquest+NC%2C+01+-+02+March.pdf"
      />
    </Layout>
  </Wrapper>
);

export default MainEventHomepage;
