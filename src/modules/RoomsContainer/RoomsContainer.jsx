import React from 'react';
import { withRoomConsumer } from 'Context';
import Loading from 'modules/Loading';
import RoomsFilter from 'modules/RoomsFilter';
import RoomsList from 'modules/RoomsList';

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);
