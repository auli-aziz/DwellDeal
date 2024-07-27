import DataCard from "../datacard/DataCard";
import React from "./index";
import useFetch from "@web/hooks/useFetch";
import { Grid } from "@mui/material"
import { useContext } from "react";
import { RoomContext } from "@web/contexts/RoomContext";

const DataRibbon = () => {
    const {result} = useContext(RoomContext);
    console.log(result.values);
    return (
        <Grid container gap={2}>
          <Grid>
            <DataCard
              title={"Average Rating"}
              value={result.average_rating}
              description={
                "Average rating of all rooms that have been scraped in this area"
              }
            />
          </Grid>
          <Grid>
            <DataCard
              title={"Total Rooms"}
              value={result.total_rooms}
              description={
                "Total rooms that have been scraped in this area"
            }
            />
          </Grid>
          <Grid>
            <DataCard
              title={"Average Price"}
              value={result.average_price}
              description={
                "Average price for all rooms that have been scraped in this area"
              }
            />
          </Grid>
        </Grid>
      );
};
export default DataRibbon;