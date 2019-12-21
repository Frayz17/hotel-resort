// import filterRooms from './filterRooms';

const handleChange = (event) => {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;
  console.log(name, value);

  setRoomsState(
    ...roomsState,
    {
      [name]: value
    },
    filterRooms
  );
};

export default handleChange;
