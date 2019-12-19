import React from 'react';
import Jumbotron from 'modules/Jumbotron';
import Banner from 'modules/Banner';
import { LinkPrimary } from 'components/Link';

export default () => {
  return (
    <>
      <Jumbotron>
        <Banner title={'404'} subtitle={'page not found'}>
          <LinkPrimary to='/'>Return Home</LinkPrimary>
        </Banner>
      </Jumbotron>
    </>
  );
};
