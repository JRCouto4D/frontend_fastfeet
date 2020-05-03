import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

export default function defaultLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

defaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
