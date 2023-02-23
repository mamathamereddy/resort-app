import React, { useEffect, useState, createContext, useMemo } from "react";
import items from "./data";

export const RoomContext = createContext();

function RoomProvider(props) {
  const [state, setState] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: false,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  });

  const formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  useEffect(() => {
    let rooms = formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    setState({
      ...state,
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }, []);

  const getRoom = (slug) => {
    let tempRooms = [...state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };
  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setState(
      {
        ...state,
        [name]: value,
      },
      filterRooms
    );
  };

  const filterRooms = useMemo(() => {
    let { rooms, type, capacity } = state;
    console.log(type);
    let tempRooms = [...rooms];

    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    setState(
      {
        ...state,
        sortedRooms: tempRooms,
      },
      state
    );
  }, [state.type]);

  return (
    <RoomContext.Provider
      value={{
        ...state,
        getRoom,
        handleChange,
      }}
    >
      {props.children}
    </RoomContext.Provider>
  );
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer };
