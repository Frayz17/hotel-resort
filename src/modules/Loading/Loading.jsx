import React from 'react';
import loadingGif from 'assets/images/gif/loading-arrow.gif';
import LoadingBlock from './LoadingBlock';

export default () => {
  return (
    <LoadingBlock>
      <h4>rooms data loading...</h4>
      <img src={loadingGif} alt="loading" />
    </LoadingBlock>
  );
};
