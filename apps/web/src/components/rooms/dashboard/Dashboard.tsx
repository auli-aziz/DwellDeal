import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import DataRibbon from "./components/dataribbon/DataRibbon";
import HighestPriceChart from "./components/HighestPriceChart";
import HighestRating from "./components/HighestRating";
import LowestPriceChart from "./components/LowestPriceChart";
import RoomProportionChart from "./components/RoomProportionChart";

const Dashboard = () => {
    return (
        <div className="flex flex-col bg-neutral rounded-xl p-10 mb-10">
            <div className="h-fit flex lg:flex-row flex-col gap-3 justify-between items-start gap-2 mb-3">
                <HighestPriceChart />
                <DataRibbon />
            </div>
            <div className="flex lg:flex-row flex-col justify-between items-start gap-2">
                <div className="flex-1 mr-2">
                    <RoomProportionChart />
                </div>
                <div className="flex flex-col gap-3 justify-between items-start gap-2">
                    <LowestPriceChart />
                    <HighestRating />
                </div>
            </div>
        </div>
    )
};

export default Dashboard;