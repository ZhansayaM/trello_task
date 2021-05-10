import React from "react";
import { CssBaseline, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./Title";
import Card from "../Card";
import InputContainer from "../Add/AddList";
import { Droppable } from "react-beautiful-dnd";

//Styles for the components
const useStyle = makeStyles((theme) => ({
  root: {
    width: "300px",
    backgroundColor: "#EBECF0",
    marginLeft: theme.spacing(1),
  },
}));

export default function List({ list, index }) {
  const classes = useStyle();
  return (
    <div>
      <Paper className={classes.root}>
        <CssBaseline />
        {/* from imported Title function */}
        <Title title={list.title} listId={list.id} />
        <Droppable droppableId={list.id}>
          {(provided) => (
            <div
              className={classes.cardContainer}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {list.cards.map((card, index) => (
                <Card key={card.id} card={card} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <InputContainer listId={list.id} />
      </Paper>
    </div>
  );
}
