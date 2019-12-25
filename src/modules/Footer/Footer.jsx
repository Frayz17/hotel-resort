import React from 'react';
import Block from 'components/Block';
import FooterStyled from './styled/FooterStyled.jsx';

export default () => {
  const copyrightStr = `© ${new Date().getFullYear()}`;
  return (
    <FooterStyled>
      <Block>{copyrightStr}</Block>
    </FooterStyled>
  );
};
