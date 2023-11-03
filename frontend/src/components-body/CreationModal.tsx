import { Box, Chip, Paper, TextField, Typography, styled } from "@mui/material";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useReducer } from "react";
import { modalReducer } from "../context/Context.tsx";
import { REDUCER_ACTION_TYPE } from "../context/Context.tsx";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";
import TagFacesIcon from "@mui/icons-material/TagFaces";

interface ChipData {
  key: number;
  label: string;
}

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const style = {
  width: "28%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 5,
  borderRadius: "0.25rem",
  p: 5,
  display: "flex", //
  flexDirection: "column",
  alignItems: "center",
  "& .MuiTextField-root": {
    m: 2,
    width: "100%",
    margin: 0,
    marginTop: 3,
    maxWidth: "100%",
  },
};
const datestyle = {};

function CreationModal() {
  const [state, dispatch] = useReducer(modalReducer, { isOpen: false });

  const [chipData, setChipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };
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
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{
              color: "rgb(25,118,210 )",
            }}
          >
            Creating the act
          </Typography>
          <TextField
            id="outlined-multiline-flexible"
            label="Name"
            multiline
            maxRows={4}
          />
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Day of act" sx={{ datestyle }} />
          </LocalizationProvider>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              listStyle: "none",
              p: 0.5,
              m: 0,
              marginTop: 3,
              width: "100%",
            }}
            component="ul"
          >
            {chipData.map((data) => {
              let icon;

              if (data.label === "React") {
                icon = <TagFacesIcon />;
              }

              return (
                <ListItem key={data.key}>
                  <Chip
                    icon={icon}
                    label={data.label}
                    onDelete={
                      data.label === "React" ? undefined : handleDelete(data)
                    }
                    color="primary"
                  />
                </ListItem>
              );
            })}
          </Paper>
        </Box>
      </Modal>
    </div>
  );
}

export default CreationModal;
