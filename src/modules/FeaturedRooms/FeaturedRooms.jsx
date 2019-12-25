import React from 'react';
import SectionTitle from 'modules/SectionTitle';
import { RoomContext } from 'Context/';
import Room from 'modules/Room';
import Loading from 'modules/Loading';
import { FrWrapper } from './styled';
import Section from 'components/Section';

export default React.memo(() => {
  const contextType = React.useContext(RoomContext);

  let { loading, featuredRooms: rooms } = contextType;

  rooms = rooms.map((room) => {
    return <Room key={room.id} room={room} />;
  });

  return (
    <Section>
      <SectionTitle title='featured rooms' />
      <FrWrapper>{loading ? <Loading /> : rooms}</FrWrapper>
    </Section>
  );
});
