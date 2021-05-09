import { Collapse, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import InputCard from "./InputCard";

//Styles for the components
const useStyle = makeStyles((theme) => ({
  addCard: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
    background: "transparent",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "rgba(0,0,0, 0.15)",
    },
  },
  root: {
    marginTop: theme.spacing(2),
  },
}));

export default function InputContainer() {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} />
      </Collapse>

      <Collapse in={!open}>
        <Paper
          className={classes.addCard}
          onClick={() => {
            setOpen(!open);
          }}
        >
          Add a new card
        </Paper>
      </Collapse>
    </div>
  );
}
