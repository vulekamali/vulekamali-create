import React from 'react';
import MainEvent from '../mainEvent';
import copy from '../../data/northernCape.json';

import { Wrapper, Layout } from './styled';

const MainEventHomepage = () => (
  <Wrapper>
    <Layout>
      <MainEvent
        eventCopy={copy}
        learnMore
        signupUrl="https://s3-eu-west-1.amazonaws.com/manual-uploads.vulekamali.gov.za/events/Vulekamali+BetterBudgetSA+Dataquest+NC%2C+01+-+02+March.pdf"
      />
    </Layout>
  </Wrapper>
);

export default MainEventHomepage;