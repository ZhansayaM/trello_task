import { Collapse, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Draggable } from "react-beautiful-dnd";
import DeleteIcon from "@material-ui/icons/Delete";

//Styles for the components
const useStyle = makeStyles((theme) => ({
  card: {
    "&:focus": {
      border: "1px solid #0079BF",
      backgroundColor: "white",
    },
    "&:hover": {
      backgroundColor: "rgba(0,0,0, 0.05)",
    },
    margin: "8px",
    justifyContent: "space-between",
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
    display: "flex",
  },
  delete: {
    opacity: "0.5",
    width: "18px",
    "&:hover": {
      backgroundColor: "rgba(0,0,0, 0.15)",
    },
  },
}));

export default function Card({ card, index }) {
  const classes = useStyle();
  const [close, setClose] = useState(true);
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Collapse in={close}>
          <Paper className={classes.card}>
            {card.title}
            <DeleteIcon
              className={classes.delete}
              onClick={() => {
                console.log("Card id = ", card.id);
                setClose(!close);
              }}
            />
          </Paper>
          </Collapse>
        </div>
      )}
    </Draggable>
  );
}
