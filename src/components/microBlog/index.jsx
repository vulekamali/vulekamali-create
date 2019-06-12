import React, { Component } from 'react';
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

const callMicroblog = (embed, id) => {
  if (embed === 'hardcoded') {
    return <div dangerouslySetInnerHTML={{ __html: timelineDetails[id] }} />;
  }
  if (embed === 'script') {
    return <MicroBlogEmbed id="LB24_LIVE_CONTENT" data-eid={id} />;
  }
  if (embed === 'coming-soon') {
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

class MicroBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      embed: this.props.embed,
    };
  }

  componentDidMount() {
    if(this.state.embed === 'script') {
      const script = document.createElement("script");

      script.src = "https://v.24liveblog.com/24.js";
      script.defer = true;

      document.body.appendChild(script);
    }
  }

  render() {
    const { embed, id } = this.props;
    return (
      <Wrapper>
        <GlobalStyle />
        <ContainerLayout>
          <Title>Timeline</Title>
          {callMicroblog(embed, id)}
        </ContainerLayout>
      </Wrapper>
    )
  }
}

export default MicroBlog;

MicroBlog.propTypes = {
  /** embed is always a `string`that can be one of the following: `hardcoded`, `script`, or `coming-soon` */
  embed: PropTypes.string.isRequired,
  id: PropTypes.string,
};

MicroBlog.defaultProps = {
  id: '',
};
