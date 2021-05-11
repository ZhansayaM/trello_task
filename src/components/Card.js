import { Collapse, InputBase } from "@material-ui/core";
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
    margin: "5px 0 5px 5px",
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
    width: "95%",
  },
  delete: {
    opacity: "0.5",
    width: "18px",
    "&:hover": {
      backgroundColor: "rgba(0,0,0, 0.15)",
    },
    margin: "4px",
  },
  deleteContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  editInfo: {
    fontSize: "10px",
    margin: "5px",
  }
}));

export default function Card({ card, index }) {
  const classes = useStyle();
  const [close, setClose] = useState(true);
  const [isShown, setIsShown] = useState(false);
  
  return (
    <Draggable enableUserSelectHack={false} draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
        >
          <Collapse in={close}>
            <div className={classes.deleteContainer}>
              <InputBase
                className={classes.card}
                defaultValue={card.title}
                onChange={(e) => {
                  card.title = e.target.value;
                  card.updateDate = Date().toLocaleString();
                  console.log(card.updateDate);
                }}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              />
              <DeleteIcon
                className={classes.delete}
                onClick={() => {
                  console.log("Deleted card id = ", card.id);
                  setClose(!close);
                }}
              />
            </div>
            {isShown && <div className={classes.editInfo}>
            <i>The creation date: {card.creationDate}</i> <br />
            <i>The last edit: {card.updateDate}</i></div>}
          </Collapse>
        </div>
      )}
    </Draggable>
  );
}
