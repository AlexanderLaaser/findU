import { Box, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useReducer } from "react";
import { modalReducer } from "../context/Context.tsx";
import { REDUCER_ACTION_TYPE } from "../context/Context.tsx";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function CreationModal() {
  const [state, dispatch] = useReducer(modalReducer, { isOpen: false });
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: REDUCER_ACTION_TYPE.OPEN })}
      >
        Create
      </Button>
      <Modal
        open={state.isOpen}
        onClose={() => dispatch({ type: REDUCER_ACTION_TYPE.CLOSE })}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default CreationModal;
