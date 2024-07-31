import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import DataRibbon from "./components/dataribbon/DataRibbon";
import HighestPriceChart from "./components/HighestPriceChart";
import HighestRating from "./components/HighestRating";
import LowestPriceChart from "./components/LowestPriceChart";
import RoomProportionChart from "./components/RoomProportionChart";

const Dashboard = () => {
    return (
        <div className="bg-neutral rounded-xl p-10 mb-10">
            <Box display="flex" justifyContent="space-between" alignItems="flex-start" gap={2} mb={3}>
                <Box flex={1} mr={1}>
                    <HighestPriceChart />
                </Box>
                <Box flex={1}>
                    <DataRibbon />
                </Box>
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="flex-start" gap={2}>
                <Box flex={1} mr={2}>
                    <RoomProportionChart />
                </Box>
                <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="flex-start" gap={2}>
                    <Box flex={1} mb={2}>
                        <LowestPriceChart />
                    </Box>
                    <Box flex={1}>
                        <HighestRating />
                    </Box>
                </Box>
            </Box>
        </div>
    )
};
export default Dashboard;