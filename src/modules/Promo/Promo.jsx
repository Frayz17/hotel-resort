import React from 'react';
import PromoHeader from './styled/PromoHeader';
import Block from 'components/Block';

export default ({ children, header }) => {
  return <PromoHeader>{children}</PromoHeader>;
};
