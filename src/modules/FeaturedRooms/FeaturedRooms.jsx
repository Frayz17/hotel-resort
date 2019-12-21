import React from 'react';
import SectionTitle from 'modules/SectionTitle';
import { RoomContext } from 'Context/';
import Room from 'modules/Room';
import Loading from 'modules/Loading';
import { FrSection, FrWrapper } from './styled';

export default React.memo(() => {
  const contextType = React.useContext(RoomContext);
  console.log(contextType);

  let { loading, featuredRooms: rooms } = contextType;

  rooms = rooms.map((room) => {
    return <Room key={room.id} room={room} />;
  });

  return (
    <FrSection>
      <SectionTitle title="featured rooms" />
      <FrWrapper>{loading ? <Loading /> : rooms}</FrWrapper>
    </FrSection>
  );
});
