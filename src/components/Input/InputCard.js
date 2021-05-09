import { IconButton, InputBase, Paper, Button } from "@material-ui/core";
import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core/styles";

//Styles for the components
const useStyle = makeStyles((theme) => ({
  card: {
    // margin: theme.spacing(0,1,1,1),
    // paddingBottom: theme.spacing(4)
    padding: theme.spacing(1, 1, 1, 2),
    margin: theme.spacing(1),
  },
  btnAdd: {
    backgroundColor: "green",
    color: "white",
    "&:hover": {
      backgroundColor: "rgba(0,128,0, 0.7)",
    },
  },
  btnConfirm: {
    margin: theme.spacing(1),
  },
}));

export default function InputCard({ setOpen }) {
  const classes = useStyle();
  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            multiline
            onBlur={() => {
              setOpen(false);
            }}
            fullWidth
            placeholder="Enter a title of this card"
          />
        </Paper>
      </div>
      <div className={classes.btnConfirm}>
        {/* for the add button and X button, they change the setOpen only if before clicking on them, you've clicked on the inputBase, idk why this happens */}
        <Button
          className={classes.btnAdd}
          onclick={() => {
            setOpen(false);
          }}
        >
          Add card
        </Button>
        <IconButton
          onclick={() => {
            setOpen(false);
          }}
        >
          <ClearIcon />
        </IconButton>
      </div>
    </div>
  );
}
