import React from 'react';
import items from './data';
import formatData from './formatData';
import getRoom from './getRoom';
import filterRooms from './filterRooms';

const RoomContext = React.createContext();

export default function RoomProvider({ children }) {
  const [rooms, setRooms] = React.useState([]);
  const [sortedRooms, setSortedRooms] = React.useState([]);
  const [featuredRooms, setFeaturedRooms] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [roomProperties, setRoomProperties] = React.useState({
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  });

  // onMount
  React.useEffect(() => {
    const rooms = formatData(items);
    const featuredRooms = rooms.filter((room) => room.featured === true);
    //
    const maxPrice = Math.max(...rooms.map((item) => item.price));
    const maxSize = Math.max(...rooms.map((item) => item.size));

    setRooms(rooms);
    setSortedRooms(rooms);
    setFeaturedRooms(featuredRooms);
    setLoading(false);
    setRoomProperties({
      type: 'all',
      capacity: 1,
      minPrice: 0,
      minSize: 0,
      breakfast: false,
      pets: false,

      price: maxPrice,
      maxPrice,
      maxSize
    });
  }, []);

  // onMount
  React.useEffect(() => {
    if (rooms.length > 0) {
      setSortedRooms(filterRooms(rooms, roomProperties));
    }
  }, [roomProperties, rooms]);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setRoomProperties({
      ...roomProperties,
      [name]: value
    });

    return value;
  };

  return (
    <RoomContext.Provider
      value={{
        rooms: [...rooms],
        sortedRooms: [...sortedRooms],
        featuredRooms: [...featuredRooms],
        loading: loading,
        ...roomProperties,
        getRoom,
        handleChange
      }}>
      {children}
    </RoomContext.Provider>
  );
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
