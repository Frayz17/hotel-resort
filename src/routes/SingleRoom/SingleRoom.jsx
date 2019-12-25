import React from 'react';
// import styled from 'styled-components';
import { RoomContext } from 'Context';
import defaultBcg from 'assets/images/room-1.jpeg';
import Jumbotron from 'modules/Jumbotron';
import Banner from 'modules/Banner';
import Link from 'components/Link';

export default (props) => {
  console.log(props);

  const [slug, setSlug] = React.useState();

  return (
    <Jumbotron img={defaultBcg} cssStr={`min-height: 60vh;`}>
      Single Room
    </Jumbotron>
  );
};
