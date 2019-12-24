const filterRooms = (rooms, roomProperties) => {
  let {
    type,
    capacity,
    price,
    minSize,
    maxSize,
    breakfast,
    pets
  } = roomProperties;

  let tempRooms = [...rooms];

  // transform values
  // get capacity
  capacity = parseInt(capacity);
  price = parseInt(price);
  // filter by type
  if (type !== 'all') {
    tempRooms = tempRooms.filter((room) => room.type === type);
  }
  // filter by capacity
  if (capacity !== 1) {
    tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
  }
  // filter by price
  tempRooms = tempRooms.filter((room) => room.price <= price);
  //filter by size
  tempRooms = tempRooms.filter(
    (room) => room.size >= minSize && room.size <= maxSize
  );
  //filter by breakfast
  if (breakfast) {
    tempRooms = tempRooms.filter((room) => room.breakfast === true);
  }
  //filter by pets
  if (pets) {
    tempRooms = tempRooms.filter((room) => room.pets === true);
  }

  return tempRooms;
};

export default filterRooms;
