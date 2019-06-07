import React from 'react';
import MainEvent from '../mainEvent';
import copy from '../../data/northernCape.json';

import { Wrapper, Layout } from './styled';

const mainEventEventpage = () => (
  <Wrapper>
    <Layout>
      <MainEvent
        eventCopy={copy}
        addProjectUrl="https://hackdash.org/dashboards/vulekamali"
        criteriaUrl="https://docs.google.com/document/d/1sVMD4OJHuOClKSVuA2Cj57vXR0AiaDtux5m7Re510tI/export?format=pdf"
        getStartedUrl="https://s3-eu-west-1.amazonaws.com/manual-uploads.vulekamali.gov.za/events/Vulekamali+BetterBudgetSA+Dataquest+NC%2C+01+-+02+March.pdf"
        signupUrl="https://s3-eu-west-1.amazonaws.com/manual-uploads.vulekamali.gov.za/events/Vulekamali+BetterBudgetSA+Dataquest+NC%2C+01+-+02+March.pdf"
        containsImage
      />
    </Layout>
  </Wrapper>
);

export default mainEventEventpage;