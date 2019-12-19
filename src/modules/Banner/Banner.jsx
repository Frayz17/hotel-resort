import React from 'react';
import {
  BannerBlock,
  BannerTitle1,
  BannerTypography,
  DecorLine
} from './styled';

export default ({ children, title, subtitle }) => {
  return (
    <BannerBlock>
      <BannerTitle1>{title}</BannerTitle1>
      <DecorLine />
      <BannerTypography>{subtitle}</BannerTypography>
      {children}
    </BannerBlock>
  );
};
