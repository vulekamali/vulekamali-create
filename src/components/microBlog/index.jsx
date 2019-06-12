import React from 'react';
import PropTypes from 'prop-types';

import { CardContent } from '@material-ui/core';

import ContainerLayout from '../containerLayout';
import GlobalStyle from './GlobalStyle';
import hardCodedHtml from './hardCodedHtml';

import {
  Wrapper,
  Title,
  MicroBlogEmbed,
  ComingSoonContainer,
  ComingSoonText,
} from './styled';

const timelineDetails = {
  'northern-cape': `${hardCodedHtml}`,
};

const callMicroblog = (type, id) => {
  if (type === 'hardcoded') {
    return <div dangerouslySetInnerHTML={{ __html: timelineDetails[id] }} />;
  }
  if (type === 'script') {
    return <MicroBlogEmbed id="LB24_LIVE_CONTENT" data-eid={id} />;
  }
  if (type === 'coming-soon') {
    return (
      <ComingSoonContainer>
        <CardContent>
          <ComingSoonText>Coming Soon...</ComingSoonText>
        </CardContent>
      </ComingSoonContainer>
    );
  }
  return null;
};

const MicroBlog = ({ type, id }) => (
  <Wrapper>
    <GlobalStyle />
    <ContainerLayout>
      <Title>Timeline</Title>
      {callMicroblog(type, id)}
    </ContainerLayout>
  </Wrapper>
);

export default MicroBlog;

MicroBlog.propTypes = {
  /** type is always a `string`that can be one of the following: `hardcoded`, `script`, or `coming-soon` */
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
};

MicroBlog.defaultProps = {
  id: '',
};
