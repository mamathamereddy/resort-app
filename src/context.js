import React, { useEffect, useState, createContext } from "react";
import items from "./data";

export const RoomContext = createContext();

function RoomProvider(props) {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(false);

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
    setRooms(rooms);
    setFeaturedRooms(featuredRooms);
    setSortedRooms(rooms);
    setLoading(false);
  }, []);

  const getRoom = (slug) => {
    let tempRooms = [...rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  return (
    <RoomContext.Provider
      value={{ rooms, featuredRooms, sortedRooms, loading, getRoom }}
    >
      {props.children}
    </RoomContext.Provider>
  );
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer };
