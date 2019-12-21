const getRoom = (slug) => {
  const tempRooms = [...this.state.rooms];
  const room = tempRooms.find((room) => room.slug === slug);
  return room;
};

export default getRoom;
