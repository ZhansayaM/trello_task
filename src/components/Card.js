import { InputBase, Paper } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//Styles for the components
const useStyle = makeStyles((theme) => ({
  card: {
    "&:focus": {
      border: "1px solid #0079BF",
      backgroundColor: "white",
    },
    margin: "8px",
    padding: "8px 8px 8px 16px",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    borderRadius: "4px",
    color: "rgba(0, 0, 0, 0.87)",
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    backgroundColor: "#fff",
    fontSize: "0.875rem",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "400",
    lineHeight: "1.43",
    letterSpacing: "0.01071em",
  },
}));

export default function Card({ card }) {
  const classes = useStyle();
  return (
    <div>
      {/* <InputBase
        defaultvalue="Submit"
          inputProps={{
                className: classes.card,
              }}
            fullWidth
          /> */}
      <Paper className={classes.card}>{card.title}</Paper>
      {/* <Paper className={classes.card}>Submit the task</Paper> */}
    </div>
  );
}
