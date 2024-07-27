import DataCard from "../datacard/DataCard";
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
    <div className="border-2 border-white bg-white rounded-xl">
      <Grid container gap={2}>
        <Grid>
          <DataCard
            title={"Average Rating"}
            value={result.average_rating.toString()}
            description={
              "Average rating of all rooms that have been scraped in this area"
            }
          />
        </Grid>
        <Grid>
          <DataCard
            title={"Total Rooms"}
            value={result.total_rooms.toString()}
            description={
              "Total rooms that have been scraped in this area"
            }
          />
        </Grid>
        <Grid>
          <DataCard
            title={"Average Price"}
            value={result.average_price.toString()}
            description={
              "Average price for all rooms that have been scraped in this area"
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};
export default DataRibbon;