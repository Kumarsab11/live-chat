import { IconButton } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import React from "react";

const CreateGroups = () => {
  return (
    <div className="createGroups-container">
      <input placeholder="Enter Group Name" className="search-box" />
      <IconButton>
        <DoneAllIcon />
      </IconButton>
    </div>
  );
};

export default CreateGroups;
