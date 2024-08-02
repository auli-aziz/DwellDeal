import DataCard from "./DataCard";
import React from "./index";
import useFetch from "@web/hooks/useFetch";
import { Grid } from "@mui/material"
import { useContext } from "react";
import { RoomContext } from "@web/contexts/RoomContext";

const DataRibbon = () => {
  const roomContext = useContext(RoomContext);

  if (!roomContext) {
    return <div>Loading...</div>;
  }

  const { result } = roomContext;
  return (
    <div className="flex justify-around items-center gap-5 w-full h-[245px] bg-white rounded-xl p-5">
      <DataCard
        title={"Average Rating"}
        value={result.average_rating.toString()}
        description={
          "Average rating of all rooms that have been scraped in this area"
        }
      />
      <DataCard
        title={"Total Rooms"}
        value={result.total_rooms.toString()}
        description={
          "Total rooms that have been scraped in this area"
        }
      />
      <DataCard
        title={"Average Price"}
        value={"Rp" + result.average_price.toString() + ",00"}
        description={
          "Average price for all rooms that have been scraped in this area"
        }
      />
    </div>
  );
};
export default DataRibbon;