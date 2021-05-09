import React, { useState } from "react";
import { Typography, InputBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

//  Styles for the components
const useStyle = makeStyles((theme) => ({
  editableTitle: {
    //   push everything from title away
    flexGrow: 1,
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  editableTitleContainer: {
    margin: theme.spacing(1),
    display: "flex",
  },
  input: {
    margin: theme.spacing(1),
    "&:focus": {
      border: "1px solid #0079BF",
      backgroundColor: "white",
      borderRadius: "4px",
    },
  },
}));

export default function Title({ title }) {
  const classes = useStyle();
  const [open, setOpen] = useState(true);
  const [val, setVal] = useState("To do");

  return (
    <div>
      {/* Based on user's clicks (do they want to edit or not) */}
      <div className={classes.editableTitleContainer}>
        <InputBase
          // defaultValue={val}
          value={title}
          className={classes.editableTitle}
          inputProps={{
            className: classes.input,
          }}
          fullWidth
        />
        {/* Adding a 'more' icon (3 dots) */}
        <MoreHorizIcon />
      </div>
    </div>
  );
}