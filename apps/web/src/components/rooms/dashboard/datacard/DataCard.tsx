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
      <Paper>
        <div>
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
        </div>
        <Typography fontSize={"h4"}>{value}</Typography>
      </Paper>
    );
};

export default DataCard;