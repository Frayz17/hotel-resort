import React from 'react';
import Jumbotron from 'modules/Jumbotron';
import Banner from 'modules/Banner';

export default () => {
  return (
    <>
      <Jumbotron>
        <Banner
          title={'luxurious rooms'}
          subtitle={'deluxe rooms starting at $299'}
        />
      </Jumbotron>
    </>
  );
};
