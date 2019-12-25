const getRoom = (slug, rooms) => {
  const tempRooms = [...rooms];
  const room = tempRooms.find((room) => room.slug === slug);
  return room;
};

export default getRoom;
