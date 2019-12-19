import React from 'react';
import { SectionTitleBlock, StyledTitle4, DecorLine } from './styled';

export default ({ title }) => {
  return (
    <SectionTitleBlock>
      <StyledTitle4>{title}</StyledTitle4>
      <DecorLine />
    </SectionTitleBlock>
  );
};
