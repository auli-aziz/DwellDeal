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
      <div className="p-5">
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
        </div><Typography variant="h3" color={"#565151"} className="font-montserrat font-semibold">{value}</Typography>
        
      </div>
    );
};

export default DataCard;