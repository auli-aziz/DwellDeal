import { Paper, Typography, Tooltip, IconButton } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React from "react";

export type DataCardProps = {
    title: string;
    value: string;
    description: string;
  };
  
const DataCard = (props: DataCardProps) => {
    const { title, value, description } = props;
    return (
      <Paper sx={{padding:2, margin:1}}>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <Typography fontSize={"h6"} color={"lightslategrey"}>
            {title}
          </Typography>
          <Tooltip
            title={
              <Typography
                fontSize={16}
              >{`${description} which is ${value}`}</Typography>
            }
          >
            <IconButton>
              <InfoOutlinedIcon />
            </IconButton>
          </Tooltip>
        </div><Typography variant="h4" color={"dark"}>{value}</Typography>
        
      </Paper>
    );
};

export default DataCard;