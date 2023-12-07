import { Box, TextField, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useReducer } from "react";
import { modalReducer } from "../context/Context.tsx";
import { REDUCER_ACTION_TYPE } from "../context/Context.tsx";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AutoCompleteGoogleInputField from "./AutoCompleteGoogleInputField.tsx";
import { theme } from "../App.tsx";
import { Chip, ChipsInput, initTE } from "tw-elements";
initTE({ Chip, ChipsInput });

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
              color: theme.palette.companycolor.main,
            }}
          >
            Create your activity
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
                  size: "small",
                },
              }}
            />
          </LocalizationProvider>
          <AutoCompleteGoogleInputField></AutoCompleteGoogleInputField>
          <div
            data-te-chip-init
            data-te-ripple-init
            className="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-gray-200"
            data-te-close="true"
          >
            x
          </div>

          <div className="flex w-full flex-wrap justify-center">
            <div
              data-te-chips-input-init
              data-te-chips-placeholder
              className="mb-0 min-h-[45px] border-none pb-0 shadow-none outline-none transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:cursor-text"
            ></div>
          </div>

          <a
            href="#_"
            className="inline-flex items-center w-full px-5 py-3 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-red-500 border border-transparent border-solid rounded-md cursor-pointer select-none sm:mb-0 sm:w-auto hover:bg-red-600 hover:bg-red-600 hover:text-white focus-within:bg-red-600 focus-within:bg-red-600"
          >
            Create Activity
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </Box>
      </Modal>
    </div>
  );
}

export default CreationModal;
