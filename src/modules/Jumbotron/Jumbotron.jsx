import React from 'react';
import JumbotronHeader from './JumbotronHeader';

export default ({ children, cssStr = '', img = '' }) => {
  return (
    <JumbotronHeader img={img} cssStr={cssStr}>
      {children}
    </JumbotronHeader>
  );
};
