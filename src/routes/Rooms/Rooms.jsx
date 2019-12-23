import React from 'react';
import Jumbotron from 'modules/Jumbotron';
import Banner from 'modules/Banner';
import RoomsContainer from 'modules/RoomsContainer';
import { LinkPrimary } from 'components/Link';

import room2Img from 'assets/images/room-2.jpeg';

const cssStrJumbotron = `
  background-image: url(${room2Img});
  min-height: 60vh;
`;

export default () => {
  return (
    <>
      <Jumbotron cssStr={cssStrJumbotron}>
        <Banner title={'our rooms'}>
          <LinkPrimary to='/'>Return Home</LinkPrimary>
        </Banner>
      </Jumbotron>
      <RoomsContainer />
    </>
  );
};
