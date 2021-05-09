import { IconButton, InputBase, Paper, Button } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import { makeStyles } from "@material-ui/core/styles";
import storeAPI from "../../utils/storeAPI";

//Styles for the components
const useStyle = makeStyles((theme) => ({
  card: {
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

export default function InputCard({ setOpen, listId, type }) {
  const classes = useStyle();
  const [cardTitle, setCardTitle] = useState("");
  const { addMoreCards, addMoreList } = useContext(storeAPI);
  return (
    <div>
      <div>
        <Paper className={classes.card}>
          <InputBase
            onChange={(e) => {
              setCardTitle(e.target.value);
            }}
            multiline
            onBlur={() => {
              setOpen(false);
            }}
            fullWidth
            value={cardTitle}
            placeholder={
              type === "list"
                ? "Enter a list title"
                : "Enter a title of this card"
            }
          />
        </Paper>
      </div>
      <div className={classes.btnConfirm}>
        {/* for the add button and X button, they change the setOpen only if before clicking on them, you've clicked on the inputBase, idk why this happens */}
        <Button
          className={classes.btnAdd}
          onClick={() => {
            if (type === "list") {
              addMoreList(cardTitle);
              setOpen(false);
              setCardTitle("");
            } else {
              addMoreCards(cardTitle, listId);
              setOpen(false);
              setCardTitle("");
            }
          }}
        >
          {type === "list" ? "Add list" : "Add card"}
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