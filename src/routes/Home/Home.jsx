import React from 'react';
import Jumbotron from 'modules/Jumbotron';
import Banner from 'modules/Banner';
import Offers from 'modules/Offers';
import { LinkPrimary } from 'components/Link';
import FeaturedRooms from 'modules/FeaturedRooms';

export default React.memo(() => {
  return (
    <>
      <Jumbotron>
        <Banner
          title={'luxurious rooms'}
          subtitle={'deluxe rooms starting at $299'}
        >
          <LinkPrimary to="/rooms">Our Rooms</LinkPrimary>
        </Banner>
      </Jumbotron>
      <Offers />
      <FeaturedRooms />
    </>
  );
});
