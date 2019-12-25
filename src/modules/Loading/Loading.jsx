import React from 'react';
import loadingGif from 'assets/images/gif/loading-arrow.gif';
import LoadingBlock from './LoadingBlock';
import { TypographyTitle4 } from 'components/Typography';

export default () => {
  return (
    <LoadingBlock>
      <TypographyTitle4>rooms data loading...</TypographyTitle4>
      <img src={loadingGif} alt='loading' />
    </LoadingBlock>
  );
};
