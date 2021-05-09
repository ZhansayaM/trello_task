import { Collapse, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import InputCard from "./AddCard";

//Styles for the components
const useStyle = makeStyles((theme) => ({
  addCard: {
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
    backgroundColor: "#EBECF0",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "rgba(0,0,0, 0.15)",
    },
  },
  root: {
    width: '300px'
  },
}));

export default function InputContainer({listId, type}) {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <InputCard setOpen={setOpen} listId={listId} type={type} />
      </Collapse>

      <Collapse in={!open}>
        <Paper
          className={classes.addCard}
          elevation={0}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Typography>{type === 'list' ? 'Add a new list' : '+ Add a new card'}</Typography>
        </Paper>
      </Collapse>
    </div>
  );
}
