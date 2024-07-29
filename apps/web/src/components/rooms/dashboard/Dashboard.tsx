import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import scss from "./Dashboard.module.scss"
import DataRibbon from "./dataribbon/DataRibbon";
import HighestPriceChart from "./highestprice/HighestPriceChart";

const Dashboard = () => {
    return (
        <div className="bg-neutral rounded-xl p-10">
            <Box display="flex" justifyContent="space-between" alignItems="flex-start" gap={2}>
                <Box flex={1} mr={2}>
                    <HighestPriceChart />
                </Box>
                <Box flex={1}>
                    <DataRibbon />
                </Box>
            </Box>
        </div>
    )
};
export default Dashboard;