import {
  Box,
  Chip,
  Input,
  Paper,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useReducer, useState } from "react";
import { modalReducer } from "../context/Context.tsx";
import { REDUCER_ACTION_TYPE } from "../context/Context.tsx";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import AutoCompleteGoogleInputField from "./AutoCompleteGoogleInputField.tsx";
import { theme } from "../App.tsx";

interface ChipData {
  key: number;
  label: string;
}

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const style = {
  width: "28%",
  maxWidth: "500px",
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
    maxWidth: "400px",
  },
};

function CreationModal() {
  const [state, dispatch] = useReducer(modalReducer, { isOpen: false });

  const [chipData, setChipData] = React.useState<readonly ChipData[]>([]);
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [newLabel, setNewLabel] = useState("");

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  const toggleInput = () => {
    setIsInputOpen(!isInputOpen);
  };

  const handleAddLabel = () => {
    const nextKey =
      chipData.length > 0
        ? Math.max(...chipData.map((chip) => chip.key)) + 1
        : 0;
    setChipData([...chipData, { key: nextKey, label: newLabel }]);
    setNewLabel("");
    toggleInput();
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: REDUCER_ACTION_TYPE.OPEN })}
        style={{ backgroundColor: theme.palette.companycolor.main }}
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
            Create your event
          </Typography>
          <TextField
            id="outlined-multiline-flexible"
            label="Name"
            multiline
            maxRows={4}
            size="small"
          />
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Day of act"
              slotProps={{
                textField: {
                  size: "small", // Stellen Sie sicher, dass Sie die Eigenschaften korrekt zuweisen
                },
              }}
              // ... andere Props, die Sie dem DatePicker übergeben müssen
            />
          </LocalizationProvider>
          <AutoCompleteGoogleInputField></AutoCompleteGoogleInputField>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              listStyle: "none",
              p: 0.5,
              m: 0,
              marginTop: 3,
              width: "95%",
              maxWidth: "500px",
              "& .MuiPaper-root": {
                border: "0",
              },
            }}
            component="ul"
            variant="outlined"
          >
            {chipData.map((data) => {
              let icon;
              return (
                <ListItem key={data.key}>
                  <Chip
                    icon={icon}
                    label={data.label}
                    onDelete={handleDelete(data)}
                    color="primary"
                    sx={{ fontSize: "1rem" }}
                  />
                </ListItem>
              );
            })}

            {isInputOpen ? (
              <Input
                value={newLabel}
                onChange={(e) => setNewLabel(e.target.value)}
                onBlur={handleAddLabel}
                autoFocus
              />
            ) : (
              <ListItem>
                <Chip
                  icon={<AddIcon />}
                  label="Category"
                  onClick={toggleInput}
                  variant="outlined"
                  size="medium"
                  sx={{ fontSize: "1rem" }}
                />
              </ListItem>
            )}
          </Paper>
        </Box>
      </Modal>
    </div>
  );
}

export default CreationModal;
