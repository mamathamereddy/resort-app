import React, { useContext } from "react";

import { RoomContext } from "../context";
import Title from "./Title";
import Room from "./Room";
import Loading from "./Loading";

const FeaturedRooms = () => {
  let { loading, featuredRooms: rooms } = useContext(RoomContext);

  rooms = rooms.map((room) => {
    return <Room key={room.id} room={room} />;
  });

  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : rooms}
      </div>
    </section>
  );
};

export default FeaturedRooms;
