import React from 'react';
import JumbotronHeader from './JumbotronHeader';

export default ({ children, cssStr }) => {
  return <JumbotronHeader cssStr={cssStr}>{children}</JumbotronHeader>;
};
