import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import scss from "./Dashboard.module.scss"
import DataRibbon from "./dataribbon/DataRibbon";

const Dashboard = () => {
    return (
        <div className="bg-neutral rounded-xl p-5">
            <Box>
                <DataRibbon />
            </Box>
        </div>
    )
};
export default Dashboard;