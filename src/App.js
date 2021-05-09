import React, { useState } from "react";
import List from "./components/List/List";
import store from "./utils/store";
import StoreAPI from "./utils/storeAPI";
import { v4 as uniqueID } from "uuid";
import InputContainer from "./components/Input/InputContainer";
import { makeStyles } from "@material-ui/core/styles";
import { DragDropContext } from "react-beautiful-dnd";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
    background: "beige",
  },
}));

export default function App() {
  const [data, setData] = useState(store);
  const classes = useStyle();

  const addMoreCards = (title, listId) => {
    const newCardID = uniqueID();
    console.log(newCardID);
    const newCard = {
      id: newCardID,
      title,
    };
    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };

  const addMoreList = (title) => {
    const newListId = uniqueID();
    const newList = {
      cards: [],
      id: newListId,
      title,
    };
    const newState = {
      listIds: [...data.listIds, newListId],
      lists: {
        ...data.lists,
        [newListId]: newList,
      },
    };
    setData(newState);
  };
  return (
    <StoreAPI.Provider value={{ addMoreCards, addMoreList }}>
      <DragDropContext
        onDragEnd={(result) => {
          const { destination, source, draggableID } = result;
          console.log(
            "destination",
            destination,
            "source",
            source,
            draggableID
          );
          if (!destination) {
            return;
          }
          const sourceList = data.lists[source.droppableId];
          const destList = data.lists[destination.droppableId];
          const draggingCard = sourceList.cards.filter(
            (card) => card.id === draggableID
          )[0];

          if (source.droppableId === destination.droppableId) {
            sourceList.cards.splice(source.index, 1);
            destList.cards.splice(destination.index, 0, draggingCard);
          }
        }}
      >
        <div className={classes.root}>
          {data.listIds.map((listId) => {
            const list = data.lists[listId];
            return <List list={list} key={listId} />;
          })}
          <InputContainer type="list" />
        </div>
      </DragDropContext>
    </StoreAPI.Provider>
  );
}
