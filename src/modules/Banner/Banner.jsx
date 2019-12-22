import React from 'react';
import { DecorLine } from 'components/Decor';
import {
  BannerBlock,
  ResponsiveTypographyTitle1,
  FsMgTypography
} from './styled';

export default ({ children, title, subtitle }) => {
  return (
    <BannerBlock>
      <ResponsiveTypographyTitle1>{title}</ResponsiveTypographyTitle1>
      <DecorLine />
      <FsMgTypography>{subtitle}</FsMgTypography>
      {children}
    </BannerBlock>
  );
};
