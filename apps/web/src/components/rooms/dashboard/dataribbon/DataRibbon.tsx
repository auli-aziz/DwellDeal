import DataCard from "../datacard/DataCard";
import React from "./index";
import useFetch from "@web/hooks/useFetch";
import { Grid } from "@mui/material"

const DataRibbon = () => {
    const { fetchData, isLoading, error } = useFetch(() => fetchResults(keyword));
    return (
        <Grid container gap={2}>
          <Grid>
            <DataCard
              title={"Average Rating"}
              value={"462"}
              description={
                "Average rating of all rooms that have been scraped in this area"
              }
            />
          </Grid>
          <Grid>
            <DataCard
              title={"Total Rooms"}
              value={"$25,732.53"}
              description={
                "Total rooms that have been scraped in this area"
            }
            />
          </Grid>
          <Grid>
            <DataCard
              title={"Average Price"}
              value={"$159.30"}
              description={
                "Average price for all rooms that have been scraped in this area"
              }
            />
          </Grid>
        </Grid>
      );
};
export default DataRibbon;