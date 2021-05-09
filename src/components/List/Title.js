import React, { useState } from "react";
import { InputBase} from "@material-ui/core";
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

export default function Title({ title, listId }) {
  const classes = useStyle();
  const [val, setVal] = useState(title);

  return (
    <div>
      {/* Based on user's clicks (do they want to edit or not) */}
      <div className={classes.editableTitleContainer}>
        <InputBase
          onChange= {(e)=>{
            setVal(e.target.value);
          }}
          value={val}
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
// const [open, setOpen] = useState(false);
//   const [newTitle, setNewTitle] = useState(title);
//   const { updateListTitle } = useContext(storeAPI);
//   const classes = useStyle();
//   const handleOnChange = (e) => {
//     setNewTitle(e.target.value);
//   };

//   const handleOnBlur = () => {
//     updateListTitle(newTitle, listId);
//     setOpen(false);
//   };
//   return (
//     <div>
//       {open ? (
//         <div>
//           <InputBase
//             onChange={handleOnChange}
//             autoFocus
//             value={newTitle}
//             inputProps={{
//               className: classes.input,
//             }}
//             fullWidth
//             onBlur={handleOnBlur}
//           />
//         </div>
//       ) : (
//         <div className={classes.editableTitleContainer}>
//           <Typography
//             onClick={() => setOpen(!open)}
//             className={classes.editableTitle}
//           >
//             {title}
//           </Typography>
//           <MoreHorizIcon />
//         </div>
//       )}
//     </div>
//   );
// }
